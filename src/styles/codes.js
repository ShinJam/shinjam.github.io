import css from "@emotion/css"

const codeStyles = css`
    .gatsby-highlight {
        background-color: #1d1f21;
        border-radius: 0.3em;
        margin: 0;
        overflow: auto;
    }

    .gatsby-highlight code[class*="language-"],
    pre[class*="language-"] {
        font-family: "Fira Code", "Consolas", "Monaco", "Andale Mono",
            "Ubuntu Mono", monospace;
    }

    .gatsby-highlight pre[class*="language-"].line-numbers {
        padding: 0 0 0 2.8em;
        display: inline-block;
        overflow: auto;
        overflow-x: hidden;
    }

    .has-highlighted-lines {
        padding: 0.5em;
    }

    .gatsby-highlight-code-line {
        background-color: #022a4b;
        display: block;
        margin-right: -1.2em;
        margin-left: -1.2em;
        padding-right: 1em;
        padding-left: 0.75em;
        border-left: 0.35em solid #0687f0;
    }
`
export default codeStyles
