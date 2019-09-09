module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
    description: `ayumu's technical blog`,
    author: `ayumu`,
    ogpImg: `./wojciech-then-DijA5f0voGQ-unsplash.jpg`,
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