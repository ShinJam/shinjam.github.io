import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"

const AboutContainer = styled("div")`
    padding-top: 1em;
    display: grid;
    grid-template-columns: 8em 1fr;
    grid-gap: 2em;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
        grid-template-columns: 1fr 3fr 1fr;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
        grid-template-columns: 7em 1fr;
        grid-template-rows: 3em 1fr;
        grid-gap: 2em;
    }
`

const AboutLinkContainer = styled("div")`
    padding-top: 1em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
        grid-row: 2;
    }
`

const AboutLink = styled("a")`
    margin-bottom: 1.5em;
    font-weight: 600;
    line-height: 1.9;
    text-decoration: none;
    color: currentColor;
    padding-left: 1em;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        opacity: 0;
        transition: all 400ms ease-in-out;
    }

    &:hover {
        span {
            transform: translateX(0px);
            opacity: 1;
            transition: all 150ms ease-in-out;
        }
    }
`

const AboutBio = styled("div")`
    padding-bottom: 3em;

    h3 {
        margin: 0;
    }

    table {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 0.8125rem;
        font-size: 1rem;
        line-height: 1.625rem;
        border-collapse: collapse;
        width: 100%;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
        grid-row: 2;
    }
`

const AboutActions = styled("div")`
    padding-top: 1em;
    padding-bottom: 3em;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
        padding: 0;
        grid-column: 1 / -1;
        grid-row: 1;
    }
`

export default () => {
    const data = useStaticQuery(graphql`
        query About {
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
        <AboutContainer>
            <AboutLinkContainer>
                {socialLinks.map((social, i) => (
                    <AboutLink
                        key={i}
                        href={
                            social.label === "Email"
                                ? "mailto:" + social.url
                                : social.url
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {social.label}
                        <span>&#8594;</span>
                    </AboutLink>
                ))}
            </AboutLinkContainer>
            <AboutBio>
                <h3>Shin Jae Min</h3>
                <p>
                    탐구하고 도전을 좋아하는 꿈나무 개발자 입니다. Back-end와
                    Python에 관심이 많습니다!
                </p>
                <p>
                    블로그 이름은 Gemini 입니다. 지속적으로 발전 시키고 있으며
                    저의 성장과 함께할 친구 입니다 :) <br />
                    Gatsby로 만들었으며 Prist, Advanced, jbee 블로그를 참고
                    했습니다.
                </p>
                <AboutActions>
                    <a href="/about" target="_blank" rel="noopener noreferrer">
                        <Button className="Button--secondary">Show more</Button>
                    </a>
                </AboutActions>
            </AboutBio>
        </AboutContainer>
    )
}
