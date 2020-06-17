import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"

const MouseImg = styled("div")`
    display: flex;
    justify-content: center;
    with: 100%;
    margin-top: 3em;
    padding-bottom: 1em;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
        img {
            width: 10%;
        }
    }
`

const Mouse = () => (
    <MouseImg>
        <img src="/assets/mouse.gif" />
    </MouseImg>
)

export default Mouse
