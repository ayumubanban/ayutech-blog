module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
    description: `ayumu's technical blog`,
    author: `ayumu`,
    ogpImg: `https://imagestoreprivate.files.wordpress.com/2019/09/photo-1473625247510-8ceb1760943f.jpeg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        ],
      },
    },
    `gatsby-plugin-emotion`,
  ],
}