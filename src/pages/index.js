import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import About from "components/About";
import Layout from "components/Layout"
import SEO from "components/SEO"
import Tags from "components/Tags"

const Hero = styled("div")`
    padding-top: 2.5em;
    padding-bottom: 1em;
    margin-bottom: 1em;
    max-width: 830px;

    h1 {
        margin-bottom: 1em;
        font-weight: 100;
        line-height: 1.7em;
        font-size: 2.2em;


        span {
            text-decoration: none;
            transition: all 100ms ease-in-out;
            cursor: pointer;

            &:nth-of-type(1) {
                color: ${colors.blue500};
            }
            &:nth-of-type(2) {
                color: ${colors.orange500};
            }
            &:nth-of-type(3) {
                color: ${colors.purple500};
            }
            &:nth-of-type(4) {
                color: ${colors.green500};
            }
            &:nth-of-type(5) {
                color: ${colors.teal500};
            }

            &:hover {
                cursor: pointer;
                transition: all 100ms ease-in-out;

                &:nth-of-type(1) {
                    color: ${colors.blue600};
                    background-color: ${colors.blue200};
                }
                &:nth-of-type(2) {
                    color: ${colors.orange600};
                    background-color: ${colors.orange200};
                }
                &:nth-of-type(3) {
                    color: ${colors.purple600};
                    background-color: ${colors.purple200};
                }
                &:nth-of-type(4) {
                    color: ${colors.green600};
                    background-color: ${colors.green200};
                }
                &:nth-of-type(5) {
                    color: ${colors.teal600};
                    background-color: ${colors.teal200};
                }
            }
        }
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
        margin-bottom: 3em;
        padding: 0;
        h1 {
            line-height: 1.3em;
            font-size: 1.9em;
        }
    }
`

const Section = styled("div")`
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 1em;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

const RenderBody = ({ meta }) => (
    <>
        <Helmet
            title={meta.title}
            titleTemplate={`%s | Gemini Devlog`} />
        <SEO />

        <Hero className="font-balsamiq">
            <h1>
                Hello 👋 This is <span>Gemini</span> Dev Blog 
                <br />
                To showcase my <span>Studies</span> and anything else!
                <br />
                안녕하세요 Shinjam 입니다.
                <br />
                공부한 내용 정리하는 공간 입니다. 감사합니다 🙏
            </h1>
        </Hero>

        <Section>
            <h2 className="font-balsamiq">📚 About</h2>
            <About />
        </Section>

        <Section>
            <h2 className="font-balsamiq">💪 Featured Tags</h2>
            <Tags />
        </Section>
    </>
)

export default ({ data }) => {
    // Required check for no data being returned
    const meta = data.site.siteMetadata

    return (
        <Layout>
            <RenderBody meta={meta} />
        </Layout>
    )
}

RenderBody.propTypes = {
    meta: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        site {
            siteMetadata {
                title
                description
                author                
            }
        }
    }
`
