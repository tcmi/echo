// environment variable setup
let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
    siteMetadata: {
        title: process.env.GATSBY_SITE_TITLE,
        titleTemplate: `%s | ${process.env.GATSBY_SITE_TITLE}`,
        description: process.env.GATSBY_SITE_DESCRIPTION,
        url: process.env.GATSBY_SITE_URL, // no trailing slashes!
        image: "/images/social.png",
        author: process.env.GATSBY_SITE_AUTHOR,
    },
    plugins:[
        `gatsby-theme-echo`
    ],
}