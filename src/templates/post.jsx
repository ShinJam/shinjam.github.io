import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
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
        max-width: 680px;
        left: 50%;
        transform: translateX(-50%);
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
        // color: #0687f0;
        // font-weight: bold;
        color: #960d20;
        border-bottom: 1px dotted #960d20;
    }

    a[class~="anchor"] {
        border: 0;
    }

    p {
        font-size: 1.1em;
        line-height: 2;
    }

    li > p {
        margin: .5em 0;
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

    blockquote:nth-of-type(1) {
        margin-left: 0px;
        padding: 5px 20px;
        display: block;
        margin-right: 0px;
        border-left: 5px solid ${colors.primary};
        background-color: ${colors.primary + "10"};
    }
    
    blockquote {
        display: block;
        padding-left: 1em;
        margin: 0;
        border-left: 5px solid ${colors.grey400};
    }

    p > u {
        text-decoration: none;
        background: linear-gradient(
            transparent 70%,
            #fddf66 70%,
            #fddf66 90%,
            transparent 90%,
            transparent 100%
        );
    }
    strong {
        color: #4a779c;
    }

    // table style
    table {
        font-size: 14px;
        border-spacing: 0;
    }

    th {
        font-weight: 700;
        padding: .5em 1em;
        background-color: ${colors.primary + "10"};
    }

    tr {
        background: #fff;
    }

    tr:hover {
        background: #f4f4f4;
    }

    td {
        word-wrap: break-word;
        border-bottom: 1px solid #ccc;
        padding: .5em 1em;
    }

    // @media (max-width: ${dimensions.maxwidthMobile}px) {
    //     table,
    //     thead,
    //     tbody,
    //     th,
    //     td,
    //     tr {
    //         display: block;
    //     }

    //     thead tr {
    //         position: absolute;
    //         top: -9999px;
    //         left: -9999px;
    //     }

    //     table {
    //         box-shadow: none;
    //     }

    //     tr {
    //         margin: 0 0 1rem 0;
    //         box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
    //             0 1px 2px 0 rgba(0, 0, 0, 0.24);
    //         border-top: 5px solid #39a2fb;
    //         border-radius: 7px;
    //         padding-right: 5px;
    //     }

    //     tr:hover {
    //         background: #fff;
    //     }

    //     td {
    //         border: none;
    //         position: relative;
    //         padding-left: 50%;
    //         text-align: right;
    //     }

    //     td:before {
    //         position: absolute;
    //         top: 5px;
    //         left: 10px;
    //         width: 45%;
    //         padding-right: 10px;
    //         white-space: nowrap;
    //         content: attr(data-title);
    //         font-weight: bold;
    //         text-align: left;
    //     }
    // }

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
                            fluid={post.frontmatter.cover.childImageSharp.fluid}
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
                        fluid(maxWidth: 680, maxHeight: 300) {
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
