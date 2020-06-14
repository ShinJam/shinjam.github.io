import css from "@emotion/css"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const globalStyles = css`
    html,
    body,
    #___gatsby,
    #gatsby-focus-wrapper {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        min-height: 100% !important;
    }

    body {
        width: 100%;
        margin: 0 auto;
        font-size: 16px;
        line-height: 1.5;
        color: ${colors.grey900};
        -webkit-font-smoothing: antialiased;

        @media (max-width: ${dimensions.maxwidthMobile}px) {
            font-size: 14px;
        }

        * {
            box-sizing: border-box;

            &::selection {
                background: ${colors.orange500};
                color: white;
            }
        }
    }
`

export default globalStyles
