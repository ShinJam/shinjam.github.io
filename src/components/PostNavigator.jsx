import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import PostNavBtn from "components/_ui/PostNavBtn"

const PostNavigatorBox = styled("div")`
    max-width: 680px;
    width: auto;
    margin: 2em auto;
    display: grid;
    padding: 0;
    grid-column-gap: 1em;
    grid-template-rows: auto;
    grid-template-areas: "previous next";
    grid-template-columns: 1fr 1fr;
`

const PostNavigator = ({ previous, next }) => (
    <>
        <PostNavigatorBox>
            {previous && (
                <PostNavBtn
                    to={`../${previous.fields.slug}`}
                    rel="prev"
                    title={previous.frontmatter.title}
                />
            )}

            {next && (
                <PostNavBtn
                    to={`../${next.fields.slug}`}
                    rel="next"
                    title={next.frontmatter.title}
                />
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
