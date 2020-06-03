/* eslint "no-console": "off" */

const path = require("path")
const _ = require("lodash")
const moment = require("moment")
const siteConfig = require("./data/SiteConfig")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    let slug
    if (node.internal.type === "MarkdownRemark") {
        const fileNode = getNode(node.parent)
        const parsedFilePath = path.parse(fileNode.relativePath)
        if (
            Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
            Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
        ) {
            slug = `${_.kebabCase(node.frontmatter.title)}`
        } else if (
            parsedFilePath.name !== "index" &&
            parsedFilePath.dir !== ""
        ) {
            slug = `${parsedFilePath.dir}/${parsedFilePath.name}/`
        } else if (parsedFilePath.dir === "") {
            slug = `${parsedFilePath.name}/`
        } else {
            slug = `${parsedFilePath.dir}/`
        }

        if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
            if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
                slug = `${_.kebabCase(node.frontmatter.slug)}`
            if (
                Object.prototype.hasOwnProperty.call(node.frontmatter, "date")
            ) {
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
        createNodeField({ node, name: "slug", value: slug })
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
        console.error(blogResult.errors);
        throw blogResult.errors;
    }

    const postsList = blogResult.data.allMarkdownRemark.edges
    const postTemplate = require.resolve("./src/templates/post.jsx")

    postsList.forEach((edge, index) => {
        const previous = index === 0 ? null : postsList[index - 1].node  
        const next = index === postsList.length - 1 ? null : postsList[index + 1].node

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
      devtool: 'eval-source-map',
    })
  }