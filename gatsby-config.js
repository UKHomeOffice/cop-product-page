const path = require('path')

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
        siteId: '1',
        matomoUrl: 'https://matomo.dev.cop.homeoffice.gov.uk/',
        siteUrl: 'https://d1sbsc8gpwdy90.cloudfront.net/'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
