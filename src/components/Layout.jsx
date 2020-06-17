import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { Global } from "@emotion/core"
import globalStyles from "styles/global"
import typeStyles from "styles/typography"
import dimensions from "styles/dimensions"
import Footer from "components/Footer"
import Header from "components/Header"
import "styles/fonts.scss"

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${dimensions.maxwidthDesktop}px;
    padding-left: ${dimensions.paddingHorizontalDesktop}em;
    padding-right: ${dimensions.paddingHorizontalDesktop}em;
    margin: 0 auto;
    height: 100%;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}em;
        padding-right: ${dimensions.paddingHorizontalTablet}em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
        padding-left: ${dimensions.paddingHorizontalMobile}em;
        padding-right: ${dimensions.paddingHorizontalMobile}em;
    }
`

const PageTitle = styled("h1")`
    margin-bottom: 1em;
`

const Layout = ({ children, pageTitle }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={(data) => (
            <LayoutContainer className="Layout">
                <Global styles={[globalStyles, typeStyles]} />
                <Header />
                <main>
                    {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
                    {children}
                </main>
                <Footer />
            </LayoutContainer>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    pageTitle: PropTypes.string,
}

export default Layout
