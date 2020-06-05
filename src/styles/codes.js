
import css from "@emotion/css"
// gatsby-browser.js


const codeStyles = css`
    .gatsby-highlight {
        background-color: #1d1f21;
        border-radius: 0.3em;
        margin: 0.5em 0;
        padding: 1em;
        overflow: auto;
    }
    
    .gatsby-highlight pre[class*="language-"].line-numbers {
        padding: 0;
        padding-left: 2.8em;
        overflow: initial;
    }

    .gatsby-highlight-code-line {
        background-color: #022a4b;
        display: block;
        margin-right: -1.2em;
        margin-left: -1.2em;
        padding-right: 1em;
        padding-left: .75em;
        border-left: .35em solid #0687f0;
      }

`
export default codeStyles