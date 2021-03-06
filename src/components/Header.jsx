import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"

const HeaderContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
`

const HeaderLinks = styled("div")`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 4em;
    justify-content: flex-end;
    align-content: end;
    width: 100%;
    max-width: 200px;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
        grid-gap: 5.5em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
        grid-gap: 2.5em;
    }

    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 600;
        font-size: 0.95em;
        height: 100%;
        padding-bottom: 1em;
        padding-top: 0.25em;
        display: block;
        position: relative;

        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 18px;
            height: 3px;
            background: transparent;
            bottom: -3px;
            right: 50%;
            margin-right: -9px;
            transition: 100ms ease-in-out background;
        }

        &:hover {
            &:after {
                background: ${colors.primary};
                transition: 100ms ease-in-out background;
            }
        }

        &.Link--is-active {
            &:after {
                background: ${colors.primary};
                transition: 100ms ease-in-out background;
            }
        }
    }
`
const StyledLink = styled((props) => <Link {...props} />)`
    display: flex;
`

const Header = () => (
    <HeaderContainer>
        <HeaderContent>
            <StyledLink to="/">
                <Logo />
            </StyledLink>
            <HeaderLinks>
                <Link activeClassName="Link--is-active" to="/blog">
                    Blog
                </Link>
                <Link activeClassName="Link--is-active" to="/Archive">
                    Archive
                </Link>
            </HeaderLinks>
        </HeaderContent>
    </HeaderContainer>
)

export default Header
