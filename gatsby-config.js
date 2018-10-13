module.exports = {
  siteMetadata: {
    title: 'DevDay Events',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'DevDay Events',
        short_name: 'DevDay',
        icon: 'src/images/android-chrome-192x192.png', // This path is relative to the root of the site.
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat`],
      },
    },
    'gatsby-plugin-offline',
  ],
}
