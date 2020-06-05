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

        if (node.frontmatter.slug) { // slug를 따로 명시 할 때
            slug = `${_.kebabCase(node.frontmatter.slug)}`
        }
        else if(!node.frontmatter.title) { // title이 없을 때
            slug = `${parsedFilePath.name}`
        } else { // title을 기본 slug
            slug = `${_.kebabCase(node.frontmatter.title)}`
        }
        createNodeField({ node, name: "slug", value: slug })

        /*
         * making date field
         */
        if(node.frontmatter.date) {
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

    const postsList = blogResult.data.allMarkdownRemark.edges
    const postTemplate = require.resolve("./src/templates/post.jsx")

    postsList.forEach((edge, index) => {
        const previous = index === 0 ? null : postsList[index - 1].node
        const next =
            index === postsList.length - 1 ? null : postsList[index + 1].node

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

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        devtool: "eval-source-map",
    })
}
