import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"

const Hero = styled("div")`
    padding-top: 2.5em;
    padding-bottom: 3em;
    margin-bottom: 6em;
    max-width: 830px;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
        margin-bottom: 3em;
    }

    h1 {
        margin-bottom: 1em;

        a {
            text-decoration: none;
            transition: all 100ms ease-in-out;

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
`

const RenderBody = ({ meta }) => (
    <>
        <Helmet
            title={meta.title}
            titleTemplate={`%s | ${meta.title}`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: meta.title,
                },
                {
                    property: `og:description`,
                    content: meta.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: meta.author,
                },
                {
                    name: `twitter:title`,
                    content: meta.title,
                },
                {
                    name: `twitter:description`,
                    content: meta.description,
                },
            ].concat(meta)}
        />
        <Hero>
            <>
                <h1>
                    I’m your new Gatsby starter. <br />
                    I’m here to help you showcase your{" "}
                    <Link to="/blog">thoughts</Link>
                    , and anything else!
                    <br />
                    I’m hooked up to <Link to="/">Prismic</Link> and deployed
                    with
                    <Link to="/">Netlify</Link>.
                </h1>
            </>
        </Hero>
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
