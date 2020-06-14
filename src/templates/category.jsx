import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import PostGrid from "components/PostGrid"
import PostCard from "components/_ui/PostCard"

const Category = ({ posts, category, meta }) => (
    <>
        <Helmet
            title={`${category} | Gemini Devlog`}
            titleTemplate={`%s | ${category}  | Gemini Devlog`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: `Blog | Gemini Devlog`,
                },
                {
                    property: `og:description`,
                    content: meta.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: meta.author,
                },
                {
                    name: `twitter:title`,
                    content: meta.title,
                },
                {
                    name: `twitter:description`,
                    content: meta.description,
                },
            ].concat(meta)}
        />
        <Layout pageTitle={category}>
            <PostGrid>
                {posts.map((post, i) => (
                    <PostCard
                        key={i}
                        author={meta.author}
                        category={post.node.frontmatter.category}
                        title={post.node.frontmatter.title}
                        date={post.node.fields.date}
                        description={post.node.excerpt}
                        slug={post.node.fields.slug}
                    />
                ))}
            </PostGrid>
        </Layout>
    </>
)

export default ({ data, pageContext}) => {
    const posts = data.allMarkdownRemark.edges
    const meta = data.site.siteMetadata

    if (!posts) return null

    return <Category posts={posts} category={pageContext.category} meta={meta} />
}

Category.propTypes = {
    posts: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired
}

/* eslint no-undef: "off" */
export const query = graphql`
    query CategoryQuery($category: String) {
            allMarkdownRemark(
                limit: 1000
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { frontmatter: { category: { in: [$category] } } } ) {
                edges {
                    node {
                        fields {
                            slug
                            date
                        }
                        excerpt(pruneLength: 100)
                        timeToRead
                        frontmatter {
                            title
                            tags
                            cover {
                                childImageSharp {
                                    fluid(maxWidth: 680) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            category
                            date
                        }
                    }
                }
            }
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
    }
`
