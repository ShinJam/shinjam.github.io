import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import _ from "lodash"
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
			font-size: .8em;
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
    postsNodes.forEach((node, index) => {
        if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
                tags.add(tag);
            })
        }
    })

	return (
		<Container>
			{children}
			{[...tags].map((t, i) => (
                <li key={i}>
					<a key={i} href={'/tags/'+_.kebabCase(t)}>
						{t}
					</a>
				</li>
			))}
		</Container>
	)
}