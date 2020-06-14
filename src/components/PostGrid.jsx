import React from "react"
import Styled from "@emotion/styled"
import dimensions from "styles/dimensions"

const Container = Styled("div")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5em;

    @media(max-width: 1050px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-template-columns: 1fr;
        grid-gap: 2.5em;
    }
`

const PostGrid = ({ children }) => {
    return <Container>{children}</Container>
}

export default PostGrid
