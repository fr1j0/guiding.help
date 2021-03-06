module.exports = {
  siteMetadata: {
    title: `Guiding Help`,
    siteUrl: `https://guiding.help/`,
    description: `Afordable one to one online counseling. 30min Free Discovery Call. Retrain your anxious brain and unleash your full potential.`,
    keywords: `counseling, mental health, life coach, anxiety, depression, sexual abuse, panic attack, stress, talk therapy`,
    author: `@fr1j0`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Guiding Help`,
        short_name: `Guiding Help`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins`,
          `Dancing Script`,
          `Source Sans Pro`,
          `Permanent Marker`,
          `source sans pro\:300,400,400i,700,800`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
}
