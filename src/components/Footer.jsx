import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"

const FooterContainer = styled("div")`
    justify-self: self-end;
    margin-top: auto;
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
        padding-top: 1em;
    }
`

const FooterAuthor = styled("a")`
    font-size: 0.75em;
    color: ${colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

    &:hover {
        color: ${colors.blue900};

        .FooterSpooch {
            animation-name: rotate;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

const FooterSpooch = styled("img")`
    max-width: 33px;
    margin-bottom: 0.25em;
`

const Footer = () => (
    <FooterContainer>
        <FooterAuthor href="/">
            {/* <FooterSpooch className="FooterSpooch" src="logos/logo-192.png" /> */}
            © 2020 — Powered by Shinjam, xoxo rimim
        </FooterAuthor>
    </FooterContainer>
)

export default Footer
