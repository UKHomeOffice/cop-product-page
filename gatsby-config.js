const path = require('path')

const activeEnv = process.env.GATSBY_ACTIVE_ENV || "PROD";

console.log(`Using environment config: '${activeEnv}'`);

module.exports = {
  siteMetadata: {
    title: 'Homeoffice - COP',
    description: 'COP Product page',
    author: 'Zaizi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-transformer-sharp`
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: activeEnv === 'PROD' ? '6' : '1',
        matomoUrl: activeEnv === 'PROD' ? 'https://matomo.cop.homeoffice.gov.uk/' : 'https://matomo.dev.cop.homeoffice.gov.uk/',
        siteUrl: activeEnv === 'PROD' ? 'https://product.cop.homeoffice.gov.uk/' : 'https://product.dev.cop.homeoffice.gov.uk/'
      }
    },
  ],
}
