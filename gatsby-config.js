module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
    description: `ayumu's technical blog`,
    author: `ayumu`,
    ogpImg: `https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2767&q=80`,
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