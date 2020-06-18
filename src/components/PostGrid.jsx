import React, { useMemo } from 'react'
import Styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import PostCard from "components/_ui/PostCard"

const Container = Styled("div")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5em;

    @media(max-width: 1050px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-template-columns: 1fr;
        grid-gap: 2.5em;
    }
`

const PostGrid = ({ posts, meta, count }) => {
    const re = /\b\/_draft\//
    const refinedPosts = useMemo(() =>
        posts.slice(0, count * meta.postsPerPage))

    return (
        <Container>
            {refinedPosts.map((post, i) => (
                <PostCard
                    key={i}
                    author={meta.author}
                    category={post.node.frontmatter.category}
                    title={post.node.frontmatter.title}
                    date={post.node.fields.date}
                    description={post.node.excerpt}
                    slug={post.node.fields.slug}
                    drafts={re.test(post.node.fileAbsolutePath) ? true : false}
                />
            ))}
        </Container>
    )
}

export default PostGrid
