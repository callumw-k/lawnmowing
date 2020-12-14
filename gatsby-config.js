module.exports = {
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-fontawesome-css`, `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Montserrat\:400,600,800` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  }],
}
