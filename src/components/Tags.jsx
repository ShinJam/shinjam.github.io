import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"


const Container = styled("ul")`
	position: relative;
	display: block;
	margin: 0;
	padding: 0;
	list-style-type: none;
	
	li {
		position: relative;
		display: inline-block;
		margin: 0 5px 5px 0;
		
		a {
			position: relative;
			display: block;
			padding: 7px 20px;
			background-color: #5A7D7C;
			border-radius: 99px;
			color: white;
			font-size: 12px;
			font-weight: bold;
			text-transform: uppercase;
			text-decoration: none;
		}
		a:hover {
			background-color: #719998;
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
			{[...tags].map((tag, i) => (
                <li key={i}>
					<a key={i} href={'/tags/'+tag}>
						{tag}
					</a>
				</li>
			))}
		</Container>
	)
}