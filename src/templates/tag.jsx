import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import SEO from "components/SEO"
import Layout from "components/Layout"
import PostGrid from "components/PostGrid"
import ShowMore from "components/_ui/ShowMore"
import useIntersect from "utils/useIntersect"

const Tag = ({ posts, tag, meta }) => {
    const [count, setCount] = useState(1)
    const [ref, entry] = useIntersect({
        threshold: 1,
    })
    const doesNeedMore = () => posts.length > count * meta.postsPerPage

    useEffect(() => {
        if (entry.isIntersecting && doesNeedMore()) {
            setCount((prev) => prev + 1)
        }
    }, [entry])

    return (
        <>
            <Helmet
                title={`${tag}`}
                titleTemplate={`%s | tag | Gemini Devlog`}
            />
            <SEO />

            <Layout pageTitle={tag}>
                <PostGrid posts={posts} meta={meta} count={count} />
                {doesNeedMore() && <ShowMore ref={ref} />}
            </Layout>
        </>
    )
}

export default ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark.edges
    const meta = data.site.siteMetadata

    if (!posts) return null

    return <Tag posts={posts} tag={pageContext.tag} meta={meta} />
}

Tag.propTypes = {
    posts: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
    tag: PropTypes.string.isRequired,
}

/* eslint no-undef: "off" */
export const query = graphql`
    query TagQuery($tag: String) {
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
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
                postsPerPage
            }
        }
    }
`
