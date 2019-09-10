module.exports = {
  siteMetadata: {
    title: `ayutech-blog`,
    description: `ayumu's technical blog`,
    author: `ayumu`,
    ogpImg: `https://imagestoreprivate.files.wordpress.com/2019/09/photo-1473625247510-8ceb1760943f.jpeg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/iconfinder_Jewel.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
            `gatsby-remark-prismjs`,
            {
              resolve: `gatsby-remark-images`,
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 590,
              },
            },
        ],
      },
    },
    `gatsby-plugin-emotion`,
  ],
}