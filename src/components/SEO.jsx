import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import urljoin from "url-join"
import { getImagePath, getPublicationDate } from "utils/post"

const SEO = ({ postNode, slug }) => {
    const data = useStaticQuery(graphql`
        query HeaderQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                    email
                    siteLogo
                    siteUrl
                    pathPrefix
                    userLocation
                    titleAlt
                }
            }
        }
    `)
    const config = data.site.siteMetadata
    let title
    let description
    let image
    let postURL

    if (postNode) {
        const postMeta = postNode.frontmatter
        title = postMeta.title
        description = postMeta.description
            ? postMeta.description
            : postNode.excerpt
        image = postMeta.cover ? postMeta.cover : config.siteLogo
        postURL = urljoin(config.siteUrl, config.pathPrefix, slug)
    } else {
        title = config.title
        description = config.description
        image = config.siteLogo
    }

    image = getImagePath(image)

    const datePublished = getPublicationDate(postNode)

    const authorJSONLD = {
        "@type": "Person",
        name: config.author,
        email: config.email,
        address: config.userLocation,
    }

    const logoJSONLD = {
        "@type": "ImageObject",
        url: getImagePath(config.siteLogo),
    }

    const blogURL = urljoin(config.siteUrl, config.pathPrefix)
    const schemaOrgJSONLD = [
        {
            "@context": "http://schema.org",
            "@type": "WebSite",
            url: blogURL,
            name: title,
            alternateName: config.titleAlt ? config.titleAlt : "",
        },
    ]
    if (postNode) {
        schemaOrgJSONLD.push(
            {
                "@context": "http://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        item: {
                            "@id": postURL,
                            name: title,
                            image,
                        },
                    },
                ],
            },
            {
                "@context": "http://schema.org",
                "@type": "BlogPosting",
                url: blogURL,
                name: title,
                alternateName: config.titleAlt ? config.titleAlt : "",
                headline: title,
                image: { "@type": "ImageObject", url: image },
                author: authorJSONLD,
                publisher: {
                    ...authorJSONLD,
                    "@type": "Organization",
                    logo: logoJSONLD,
                },
                datePublished,
                description,
            }
        )
    }

    return (
        <Helmet>
            {/* General tags */}
            <meta name="description" content={description} />
            <meta name="image" content={image} />

            {/* Schema.org tags */}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>

            {/* OpenGraph tags */}
            <meta property="og:url" content={postNode ? postURL : blogURL} />
            {postNode ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            {/* <meta
property="fb:app_id"
content={config.FBAppID ? config.FBAppID : ""}
/> */}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    )
}

export default SEO
