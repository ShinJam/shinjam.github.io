import urljoin from "url-join"
import moment from "moment"
import config from "../../data/SiteConfig"

export const getImagePath = (imageURI) => {
    if ( typeof imageURI === 'string' )
        return urljoin(config.siteUrl, config.pathPrefix, imageURI)
    return urljoin(config.siteUrl, config.pathPrefix, imageURI.childImageSharp.fluid.src)
}

export const getPublicationDate = (postNode) => {
    if (!postNode) return null

    if (!postNode.frontmatter) return null

    if (!postNode.frontmatter.date) return null

    return moment(postNode.frontmatter.date, config.dateFromFormat).toDate()
}
