const config = require("./data/SiteConfig")
const isProd = process.env.NODE_ENV === "production"

module.exports = {
    siteMetadata: config,
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-image",
        "gatsby-plugin-sass",
        "gatsby-plugin-remove-trailing-slashes",
        "gatsby-plugin-resolve-src",
        "gatsby-plugin-emotion",
        "gatsby-plugin-lodash",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "assets",
                path: `${__dirname}/static/`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/content/`,
                ignore: isProd ? ["**/_draft"] : [],
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            aliases: { sh: "bash", js: "javascript" },
                        },
                    },
                    {
                        resolve: `gatsby-remark-relative-images`,
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 680,
                        },
                    },
                    {
                        resolve: "gatsby-remark-responsive-iframe",
                    },
                    "gatsby-remark-autolink-headers",
                    "gatsby-remark-copy-linked-files",
                    "gatsby-remark-katex",
                ],
            },
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: config.googleAnalyticsID,
            },
        },
        {
            resolve: "gatsby-plugin-nprogress",
            options: {
                color: config.themeColor,
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-catch-links",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: config.siteTitle,
                short_name: config.titleShort,
                description: config.siteDescription,
                start_url: config.pathPrefix,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: "minimal-ui",
                icon: config.siteLogo,
                icons: [
                    {
                        src: "logos/logo-48.png",
                        sizes: "48x48",
                        type: "image/png",
                    },
                    {
                        src: "logos/logo-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "logos/logo-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        },
        "gatsby-plugin-offline",
        "gatsby-plugin-netlify-cms",
        {
            resolve: "gatsby-plugin-feed",
            options: {
                setup(ref) {
                    const ret = ref.query.site.siteMetadata.rssMetadata
                    ret.allMarkdownRemark = ref.query.allMarkdownRemark
                    ret.generator = "Shinjam's DevLog"
                    return ret
                },
                query: `{
                            site {
                                siteMetadata {
                                    rssMetadata {
                                        site_url
                                        feed_url
                                        title
                                        description
                                        image_url
                                        copyright
                                    }
                                }
                            }
                        }`,
                feeds: [
                    {
                        serialize(ctx) {
                            const { rssMetadata } = ctx.query.site.siteMetadata
                            return ctx.query.allMarkdownRemark.edges.map(
                                (edge) => ({
                                    categories: edge.node.frontmatter.tags,
                                    date: edge.node.fields.date,
                                    title: edge.node.frontmatter.title,
                                    description: edge.node.excerpt,
                                    url:
                                        rssMetadata.site_url +
                                        edge.node.fields.slug,
                                    guid:
                                        rssMetadata.site_url +
                                        edge.node.fields.slug,
                                    custom_elements: [
                                        { "content:encoded": edge.node.html },
                                        { author: config.email },
                                    ],
                                })
                            )
                        },
                        query: `{
                                    allMarkdownRemark(
                                        limit: 1000,
                                        sort: { order: DESC, fields: [fields___date] },
                                    ) {
                                        edges {
                                        node {
                                            excerpt
                                            html
                                            timeToRead
                                            fields {
                                                slug
                                                date
                                            }
                                            frontmatter {
                                                title    
                                                date
                                                category
                                                tags
                                            }
                                        }
                                        }
                                    }
                                }`,
                        output: config.rss,
                        title: config.rssTitle,
                    },
                ],
            },
        },
    ],
}
