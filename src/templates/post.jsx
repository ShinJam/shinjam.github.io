import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import codeStyles from "styles/codes"
import Layout from "components/Layout"
import Utterances from "components/Utterances"
import Img from "gatsby-image"
import PostNavigator from "components/PostNavigator"


const PostHeroContainer = styled.div`
    max-weight: 680px;
    max-height: 500px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-bottom: 3em;
`

const PostHeroAnnotation = styled("div")`
    padding-top: 0.25em;

    h6 {
        text-align: right;
        color: ${colors.grey600};
        font-weight: 400;
        font-size: 0.85rem;
    }

    a {
        color: currentColor;
    }
`

const PostCategory = styled("div")`
    max-width: 680px;
    margin: 0 auto;
    text-align: center;
    font-weight: 600;
    color: ${colors.grey600};

    h5 {
        margin-top: 0;
        margin-bottom: 1em;
    }
`

const PostTitle = styled("div")`
    max-width: 680px;
    margin: 0 auto;
    text-align: center;
    font-size: 2.5em;
    line-height: 1.45;
    font-weight: 800;
`

const PostBody = styled("div")`
    max-width: 680px;
    margin: 0 auto;
    color: ##3B454E;

    .block-img {
        margin-top: 3.5em;
        margin-bottom: 0.5em;

        img {
            width: 100%;
        }
    }
    
    // prismJS custom style
    ${codeStyles}
`

const PostMetas = styled("div")`
    max-width: 680px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: 2em;
    justify-content: space-between;
    font-size: 0.85em;
    color: ${colors.grey600};
`

const PostAuthor = styled("div")`
    margin: 0;
`

const PostDate = styled("div")`
    margin: 0;
`

const Post = ({ post, pageContext, location, meta }) => {
    return (
        <>
            <Helmet
                title={`${post.frontmatter.title} | Prist, Gatsby & Prismic Starter`}
                titleTemplate={`%s | ${meta.title}`}
                meta={[
                    {
                        name: `description`,
                        content: meta.description,
                    },
                    {
                        property: `og:title`,
                        content: `${post.frontmatter.title} | Prist, Gatsby & Prismic Starter`,
                    },
                    {
                        property: `og:description`,
                        content: meta.description,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                ].concat(meta)}
            />
            <Layout>
                <PostCategory>{post.frontmatter.category}</PostCategory>
                <PostTitle>{post.frontmatter.title}</PostTitle>
                <PostMetas>
                    <PostAuthor>{meta.author}</PostAuthor>
                    <PostDate>{post.fields.date}</PostDate>
                </PostMetas>
                {post.frontmatter.cover && (
                    <PostHeroContainer>
                        <Img
                            fluid={post.frontmatter.cover.childImageSharp.fluid}
                            className="img"
                        />
                        {post.frontmatter.coverAnnotation && (
                            <PostHeroAnnotation>
                                {post.frontmatter.coverAnnotation}
                            </PostHeroAnnotation>
                        )}
                    </PostHeroContainer>
                )}
                <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />
                <PostNavigator pageContext={pageContext} location={location} />
                <Utterances />
            </Layout>
        </>
    )
}

export default ({ data, pageContext, location }) => {
    const postContent = data.markdownRemark
    const meta = data.site.siteMetadata

    return (
        <Post
            post={postContent}
            pageContext={pageContext}
            location={location}
            meta={meta}
        />
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
}

export const query = graphql`
    query PostQuery($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            timeToRead
            excerpt
            frontmatter {
                title
                cover {
                    childImageSharp {
                        fluid(maxWidth: 680) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                coverAnnotation
                date
                category
                tags
            }
            fields {
                slug
                date
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
