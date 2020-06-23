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
import SEO from "components/SEO"

const PostHeroContainer = styled.div`
    max-weight: 680px;
    max-height: 500px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-bottom: 3em;

    .cover-img {
        margin: 0 auto;
    }
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
    color: ##3b454e;

    .block-img {
        margin-top: 3.5em;
        margin-bottom: 0.5em;

        img {
            width: 100%;
        }
    }

    a {
        text-decoration: none;
        color: #0687f0;
        font-weight: bold;
    }

    p {
        font-size: 1.1em;
        line-height: 2;
    }

    p > code[class*="language-"] {
        font-weight: bold;
        padding: 0.11em 0.3em;
        margin: 0 0.1em;
        border-radius: 0.3em;
        white-space: normal;
        background: #fffbfe;
        color: #da3a6a;
        border: 1.2px solid #da3a6a;
    }

    blockquote {
        margin-left: 0px;
        padding: 5px 20px;
        display: block;
        margin-right: 0px;
        border-left: 5px solid ${colors.primary};
        background-color: ${colors.primary + "10"};
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
                title={`${post.frontmatter.title} | Gemini Devlog`}
                titleTemplate={`%s | ${meta.title}`}
            />
            <SEO postNode={post} slug={pageContext.slug} />

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
                            fixed={post.frontmatter.cover.childImageSharp.fixed}
                            className="cover-img"
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
    pageContext: PropTypes.object.isRequired,
}

/* eslint no-undef: "off" */
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
                        fixed(width: 680, height: 300) {
                            ...GatsbyImageSharpFixed
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
