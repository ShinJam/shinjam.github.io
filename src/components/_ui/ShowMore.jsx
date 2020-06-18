import React, { forwardRef } from 'react'
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"

const Container = styled("div")`
    position: relative;
    display: flex;
    justify-content: center;
    with: 100%;
    margin-top: 3em;
    padding-bottom: 1em;
`

const Mouse = styled("div")`
    position: relative;
    width: 40px;
    height: 70px;
    box-shadow: inset 0 0 0 1px #000;
    border-radius: 25px;

    &:before {
        content: "";
        position: absolute;
        left: 50%;
        width: 8px;
        height: 8px;
        background: #000;
        margin-left: -4px;
        top: 8px;
        border-radius: 4px;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-name: scroll;
    }

    @keyframes scroll {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(46px);
        }
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
        width: 2em;
        height: 3.5em;
        &:before {
            width: 4px;
            height: 4px;
            margin-left: -2px;
        }

        @keyframes scroll {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: translateY(35px);
            }
        }
    }
`

// const ShowMore = () => <Mouse />

// const ShowMore = (props, ref) => (
//     <Container ref={ref}>
//         <Mouse />
//     </Container>
// )

const ShowMore = forwardRef((props, ref)=> (
    <Container ref={ref}>
        <Mouse />
    </Container>
))

export default ShowMore
