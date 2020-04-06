/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:"BackRoads",
    description:"Explore awesome worldwide tours & discover what makes each one unique. Forget your daily routine. Say yest to adventure",
    author: "@joanrig",
    data: {
      name: "john",
      age: 35,
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-styled-components`],
}
