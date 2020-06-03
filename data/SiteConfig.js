const config = {
  siteTitle: "Shinjam's DevLog", // Site title.
  siteTitleShort: "Dev Shinjam", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "dev blog, Web Development, back-end, python", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://shinjam.me", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Learning development, interested in backend, python", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Shinjam's DevLog RSS feed", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-166873913-1", // GA tracking ID.
  disqusShortname: "shinjam-devlog", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 5, // Amount of posts displayed per listing page.
  userName: "shinjam", // Username to display in the author segment.
  userEmail: "nevvjann@gmail.com", // Email used for RSS feed's author segment
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Wanna be a great developer!", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/shinjam",
      iconClassName: "fa fa-github"
    },
    {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/shin-jam-3145891aa",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "Email",
      url: "nevvjann@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: `Copyright © 2020. ${this.userName}`, // Copyright string for the footer of the website and RSS feed.
  themeColor: "#8565fc", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
