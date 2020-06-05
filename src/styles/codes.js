
import css from "@emotion/css"
// gatsby-browser.js


const codeStyles = css`
    .gatsby-highlight {
        background-color: #1d1f21;
        border-radius: 0.3em;
        margin: 0;
        overflow: auto;
    }
    
    .gatsby-highlight pre[class*="language-"].line-numbers {
        padding: 0 0 0 2.8em;        
        display: inline-block;
        overflow: auto;
        overflow-x: hidden;
    }

    .has-highlighted-lines {
        padding: .5em;
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