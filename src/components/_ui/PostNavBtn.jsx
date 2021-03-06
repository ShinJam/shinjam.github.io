import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"

const ArrowLeft = () => (
    <>
        <svg
            preserveAspectRatio="xMidYMid meet"
            height="1em"
            width="1em"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
        >
            <g>
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </g>
        </svg>
    </>
)

const Arrow = ({ className, rel }) => (
    <div className={className}>
        {rel === "prev" && <ArrowLeft />}
        {rel === "next" && <ArrowRight />}
    </div>
)

const ButtonInfo = ({ className, rel, title }) => (
    <div className={className}>
        <span>{rel}</span>
        <span>{title}</span>
    </div>
)

const StyledLink = styled((props) => <Link {...props} />)`
    color: #242a31;
    border: 1px solid #e6ecf1;
    margin: 0;
    display: flex;
    padding: 0;
    position: relative;
    grid-area: ${(props) => (props.rel === "prev" ? "previous" : "next")};
    align-self: stretch;
    box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);
    transition: border 250ms ease;
    align-items: center;
    justify-self: stretch;
    border-radius: 3px;
    flex-direction: row;
    text-decoration: none;
    background-color: #ffffff;
    &:hover {
        color: ${colors.primary};
        border-color: ${colors.primary};
    }
`

const StyledArrow = styled(Arrow)`
    flex: 0 0 auto;
    color: #9daab6;
    margin: 0;
    display: block;
    padding: 16px;
    font-size: 24px;
    transition: color 250ms ease;
    order: ${(props) => (props.rel === "prev" ? "0" : "1")};

    ${StyledLink}:hover & {
        color: ${colors.primary};
    }

    svg {
        width: 1em;
        height: 1em;
        vertical-align: middle;
    }
`

const StyledButtonInfo = styled(ButtonInfo)`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0;
    padding: 16px;
    vertical-align: middle;
    color: #9daab6;
    text-align: ${(props) => (props.rel === "prev" ? "right" : "left")};

    ${StyledLink}:hover & span:nth-of-type(2) {
        color: ${colors.primary};
    }
`

const ArrowRight = () => (
    <>
        <svg
            preserveAspectRatio="xMidYMid meet"
            height="1em"
            width="1em"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
        >
            <g>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </g>
        </svg>
    </>
)

export default ({ to, rel, title }) => {
    return (
        <>
            <StyledLink to={to} rel={rel}>
                <StyledArrow rel={rel} />
                <StyledButtonInfo rel={rel} title={title} />
            </StyledLink>
        </>
    )
}
