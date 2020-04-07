const path = require('path')

const activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "PROD";
console.log(`Using environment config: '${activeEnv}'`);

module.exports = {
  siteMetadata: {
    title: 'Homeoffice - COP',
    description: 'COP Product page',
    author: 'Zaizi',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.js') },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
    // `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'cop-product-page',
        short_name: 'COPProductPage',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: activeEnv === 'PROD' ? '6' : '1',
        matomoUrl: activeEnv === 'PROD' ? 'https://matomo.cop.homeoffice.gov.uk/' : 'https://matomo.dev.cop.homeoffice.gov.uk/',
        siteUrl: activeEnv === 'PROD' ? 'https://product.cop.homeoffice.gov.uk/' : 'https://product.dev.cop.homeoffice.gov.uk/'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
