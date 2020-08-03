module.exports = {
  siteMetadata: {
    title: "Osinachi's Porfolio",
    author: 'Osinachi Chukwujama',
    description: 'Osinachi Chukwujama Portfolio Website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Osinachi's Porfolio",
        short_name: 'osi portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
