import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const PostNavigatorBox = styled("div")`
    max-width: 680px;
    margin: 40px auto 12px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1em 5em;
    justify-content: space-between;
    list-style: none;
    padding: 0;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 60px;
        border: 1px solid #1464f9;
        transition: all 0.25s ease;
        text-decoration: none;
        padding: 7px 16px 8px 16px;
        border-radius: 6px;
        font-size: 1em;
        opacity: 0.8;
    }
    a:hover {
        background-color: #1464f9;
        transition: all 0.25s ease;
        color: #fff;
    }
`

const PostNavigator = ({ previous, next }) => (
    <>
        <PostNavigatorBox>
            {previous && (
                <Link to={`../${previous.fields.slug}`} rel="prev">
                    ← {previous.frontmatter.title}
                </Link>
            )}

            {next && (
                <Link to={`../${next.fields.slug}`} rel="next">
                    {next.frontmatter.title} →
                </Link>
            )}
        </PostNavigatorBox>
    </>
)

export default ({ pageContext }) => {
    const previous = pageContext.previous
    const next = pageContext.next

    return <PostNavigator previous={previous} next={next} />
}

PostNavigator.propTypes = {
    previous: PropTypes.object,
    next: PropTypes.object,
}