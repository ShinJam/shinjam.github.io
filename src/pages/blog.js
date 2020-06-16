import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import PostGrid from "components/PostGrid"
import PostCard from "components/_ui/PostCard"
import SEO from "components/SEO"

const Blog = ({ posts, meta }) => (
    <>
        <Helmet
            title="Blog" 
            titleTemplate={`%s | Gemini Devlog`}/>
        <SEO />
        
        <Layout pageTitle="Blog">
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

export default ({ data }) => {
    const posts = data.allMarkdownRemark.edges
    const meta = data.site.siteMetadata

    if (!posts) return null

    return <Blog posts={posts} meta={meta} />
}

Blog.propTypes = {
    posts: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }) {
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
