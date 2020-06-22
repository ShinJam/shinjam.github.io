import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import PropTypes from "prop-types"

const PostCardContainer = styled(Link)`
    position: relative;
    border: 1px solid ${colors.grey200};
    padding: 2em 1.5em 1.25em 1.5em;
    border-radius: 3px;
    text-decoration: none;
    color: currentColor;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
    transition: all 150ms ease-in-out;

    &:hover {
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
        transition: all 150ms ease-in-out;
        cursor: pointer;

        .PostCardAction {
            color: ${colors.primary};
            transition: all 150ms ease-in-out;

            span {
                transform: translateX(0px);
                opacity: 1;
                transition: transform 150ms ease-in-out;
            }
        }
    }
`

const PostCategory = styled("h6")`
    font-weight: 600;
    color: ${colors.grey600};
`

const PostTitle = styled("h3")`
    margin: 0;
    margin-top: 0.5em;
`

const PostMetas = styled("div")`
    display: flex;
    align-items: center;
    margin-top: 1.5em;
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

const PostDescription = styled("div")`
    margin-top: 1em;
    margin-bottom: 2em;

    p:last-of-type {
        margin: 0;
    }
`

const PostCardAction = styled("div")`
    font-weight: 600;
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;
    margin-top: auto;

    span {
        vertical-align: middle;
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
    }
`

const Drafts = styled("div")`
    position: absolute;
    top: 0;
    text-align: center;
    right: 0;
    left: 0;
    color: white;
    background: black;
`

const PostCard = ({
    author,
    category,
    date,
    title,
    description,
    slug,
    drafts,
}) => (
    <PostCardContainer className="BlogPostCard" to={`/blog/${slug}`}>
        {drafts && <Drafts>DRAFTS</Drafts>}
        <PostCategory>{category}</PostCategory>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
        <PostCardAction className="PostCardAction">
            Read more <span>&#8594;</span>
        </PostCardAction>
        <PostMetas>
            <PostAuthor>{author}</PostAuthor>
            <PostDate>{date}</PostDate>
        </PostMetas>
    </PostCardContainer>
)

export default PostCard

PostCard.propTypes = {
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    drafts: PropTypes.bool.isRequired,
}
