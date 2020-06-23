import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import _ from "lodash"
import dimensions from "styles/dimensions"
import colors from "styles/colors"

const Container = styled("ul")`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
        display: inline-block;
        margin: 0 5px 5px 0;

        a {
            display: block;
            padding: 7px 20px;
            border-radius: 20px;
            color: #a36fe6;
            font-size: 0.8em;
            font-weight: bold;
            border: 1px ${colors.primary} solid;
            text-decoration: none;
            text-transform: uppercase;
        }
        a:hover {
            background-color: ${colors.primary};
            color: white;
        }
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
        li {
            margin: 0 7px 7px 0;
            a {
                padding: 2px 10px;
            }
        }
    }
`

export default ({ children }) => {
    const data = useStaticQuery(graphql`
        query Tags {
            allMarkdownRemark(limit: 1000) {
                nodes {
                    frontmatter {
                        tags
                    }
                }
            }
        }
    `)

    const tags = new Set()
    const postsNodes = data.allMarkdownRemark.nodes
    const re = /\b\/_draft\//

    postsNodes.forEach((node, index) => {
        if (node.frontmatter.tags && !re.test(node.fileAbsolutePath)) {
            node.frontmatter.tags.forEach((tag) => {
                tags.add(tag)
            })
        }
    })

    return (
        <Container>
            {children}
            {[...tags].map((t, i) => (
                <li key={i}>
                    <a key={i} href={"/tags/" + _.kebabCase(t)}>
                        {t}
                    </a>
                </li>
            ))}
        </Container>
    )
}
