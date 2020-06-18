import React, { useState, useEffect, useRef } from 'react'
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import SEO from "components/SEO"
import Layout from "components/Layout"
import PostGrid from "components/PostGrid"
import Mouse from "components/_ui/Mouse"

const Blog = ({ posts, meta, count }) => (
    <>
        <Helmet
            title="Blog" 
            titleTemplate={`%s | Gemini Devlog`} />
        <SEO />
        
        <Layout pageTitle="Blog">
            <PostGrid 
                posts={posts} 
                meta={meta}
                count={count} />
            <Mouse />
        </Layout>
    </>
)

export default ({ data }) => {
    const posts = data.allMarkdownRemark.edges
    const meta = data.site.siteMetadata

    const [count, setCount] = useState(1)


    if (!posts) return null

    return <Blog posts={posts} meta={meta} count={count}/>
}

Blog.propTypes = {
    posts: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
}

export const query = graphql`
    {
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    fileAbsolutePath
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
                postsPerPage
            }
        }
    }
`
