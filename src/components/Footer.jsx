import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"

const FooterContainer = styled("div")`
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

const SocialIcons = styled("div")`
    display: flex;
    a {
        color: currentColor;
    }
    a:nth-of-type(2) {
        margin: 0 1em;
    }
`

const FooterSpooch = styled("img")`
    max-width: 33px;
    margin-bottom: 0.25em;
`

export default () => {
    const data = useStaticQuery(graphql`
        query Footer {
            site {
                siteMetadata {
                    socialLinks {
                        label
                        url
                        iconClassName
                    }
                }
            }
        }
    `)

    const socialLinks = data.site.siteMetadata.socialLinks

    return (
        <FooterContainer>
            <SocialIcons>
                {socialLinks.map((social, i) => {
                    let icon

                    if (social.label === "Email") icon = faEnvelope
                    else if (social.label === "GitHub") icon = faGithub
                    else if (social.label === "LinkedIn") icon = faLinkedin

                    return (
                        <a
                            key={i}
                            href={
                                social.label === "Email"
                                    ? "mailto:" + social.url
                                    : social.url
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={icon} size="2x" />
                        </a>
                    )
                })}
            </SocialIcons>

            <FooterAuthor href="/">
                {/* <FooterSpooch className="FooterSpooch" src="logos/logo-192.png" /> */}
                © 2020. Shinjam, xoxo rimim
            </FooterAuthor>
        </FooterContainer>
    )
}
