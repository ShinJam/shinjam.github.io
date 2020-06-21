/* eslint "no-console": "off" */

const path = require("path")
const _ = require("lodash")
const moment = require("moment")
const siteConfig = require("./data/SiteConfig")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === "MarkdownRemark") {
        const fileNode = getNode(node.parent)
        const parsedFilePath = path.parse(fileNode.relativePath)

        /*
         * maiking slug field
         */
        let slug

        if (node.frontmatter.slug) {
            // slug를 따로 명시 할 때
            slug = `${_.kebabCase(node.frontmatter.slug)}`
        } else if (!node.frontmatter.title) {
            // title이 없을 때
            slug = `${parsedFilePath.name}`
        } else {
            // title을 기본 slug
            slug = `${_.kebabCase(node.frontmatter.title)}`
        }
        createNodeField({ node, name: "slug", value: slug })

        /*
         * making date field
         */
        if (node.frontmatter.date) {
            const date = moment(
                node.frontmatter.date,
                siteConfig.dateFromFormat
            )
            if (!date.isValid())
                console.warn(`WARNING: Invalid date.`, node.frontmatter)

            createNodeField({
                node,
                name: "date",
                value: date.format(siteConfig.dateFormat),
            })
        }
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const blogResult = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            tags
                            category
                            date
                        }
                    }
                }
            }
        }
    `)

    if (blogResult.errors) {
        console.error(blogResult.errors)
        throw blogResult.errors
    }

    const postsEdges = blogResult.data.allMarkdownRemark.edges

    // Sort posts
    postsEdges.sort((postA, postB) => {
        const dateA = moment(
            postA.node.frontmatter.date,
            siteConfig.dateFromFormat
        )

        const dateB = moment(
            postB.node.frontmatter.date,
            siteConfig.dateFromFormat
        )

        if (dateA.isBefore(dateB)) return 1
        if (dateB.isBefore(dateA)) return -1

        return 0
    })

    const tagSet = new Set()
    const categorySet = new Set()

    const postTemplate = require.resolve("./src/templates/post.jsx")
    const tagTemplate = path.resolve("src/templates/tag.jsx")
    const categoryTemplate = path.resolve("src/templates/category.jsx")

    postsEdges.forEach((edge, index) => {
        // Generate a list of tags
        if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach((tag) => {
                tagSet.add(tag)
            })
        }
        //  Create tag pages
        tagSet.forEach((tag) => {
            createPage({
                path: `/tags/${_.kebabCase(tag)}/`,
                component: tagTemplate,
                context: { tag },
            })
        })

        // Generate a list of categories
        if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category)
        }
        // Create category pages
        categorySet.forEach((category) => {
            createPage({
                path: `/categories/${_.kebabCase(category)}/`,
                component: categoryTemplate,
                context: { category },
            })
        })

        const previous = index === 0 ? null : postsEdges[index - 1].node
        const next =
            index === postsEdges.length - 1 ? null : postsEdges[index + 1].node

        createPage({
            type: "Post",
            match: "/blog/:slug",
            path: `/blog/${edge.node.fields.slug}`,
            component: postTemplate,
            context: {
                slug: edge.node.fields.slug,
                previous,
                next,
            },
        })
    })
}

exports.sourceNodes = ({ actions }) => {
    const { createTypes } = actions
    createTypes(`
      type MarkdownRemarkFrontmatter {
        cover: File @fileByRelativePath
        coverAnnotation: String
      }
  
      type MarkdownRemark implements Node {
        frontmatter: MarkdownRemarkFrontmatter
      }
    `)
}

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        devtool: "eval-source-map",
    })
}
