const urljoin = require("url-join")

const config = {
    title: "Shinjam's DevLog", // Site title.
    titleShort: "Dev Shinjam", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
    titleAlt: "dev blog, Web Development, back-end, python", // Alternative site title for SEO.
    siteLogo: "static/logos/logo-32.png", // Logo used for SEO and manifest.
    siteUrl: "https://shinjam.me", // Domain of your website without pathPrefix.
    pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
    description: "Learning development, interested in backend, python", // Website description used for RSS feeds/meta description tag.
    postsPerPage: 3,
    rss: "/rss.xml", // Path to the RSS file.
    rssTitle: "Shinjam's DevLog RSS feed", // Title of the RSS feed
    // FBAppID: "1825356251115265", // FB Application ID for using app insights
    googleAnalyticsID: "UA-166873913-1", // GA tracking ID.
    disqusShortname: "shinjam-devlog", // Disqus shortname.
    dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
    dateFormat: "MMM Do, YYYY", // Date format for display.
    //postsPerPage: 5, // Amount of posts displayed per listing page.
    author: "shinjam", // Author to display in the author segment.
    email: "nevvjann@gmail.com", // email used for RSS feed's author segment
    userLocation: "Seoul, Korea", // User location to display in the author segment.
    // userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
    userDescription: "Wanna be a great developer!", // User description to display in the author segment.
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    themeColor: "#8565fc", // Used for setting manifest and progress theme colors.
    backgroundColor: "#e0e0e0", // Used for setting manifest background color.
}

;(config.copyright = `Copyright © 2020. ${config.author}`), // Copyright string for the footer of the website and RSS feed.
    (config.socialLinks = [
        {
            label: "GitHub",
            url: "https://github.com/shinjam",
            iconClassName: "fa fa-github",
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/shin-jam-3145891aa",
            iconClassName: "fa fa-linkedin",
        },
        {
            label: "Email",
            url: `${config.email}`,
            iconClassName: "fa fa-envelope",
        },
    ])

config.rssMetadata = {
    site_url: config.siteUrl,
    feed_url: urljoin(config.siteUrl, config.pathPrefix, config.rss),
    title: config.title,
    description: config.description,
    image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix
    )}/logos/logo-512.png`,
    copyright: config.copyright,
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
    config.pathPrefix = ""
} else {
    // Make sure pathPrefix only contains the first forward slash
    config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
    config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure rss has a starting forward slash
if (config.rss && config.rss[0] !== "/") config.rss = `/${config.rss}`

module.exports = config
