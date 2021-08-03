module.exports = {
    siteMetadata: {
        title: `Zipremit`,
        description: `Low cost remitance`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
                path: `${__dirname}/data`,
            },
        },
        `gatsby-transformer-json`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#f1f5f6`,
                theme_color: `#c88c39`,
                display: `minimal-ui`,
                icon: `src/images/favicon/favicon.ico`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/layouts`),
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                precision: 6,
            },
        },
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                path: `${__dirname}/locales`,
                languages: [`en`, `fr`],
                defaultLanguage: `en`,

                // you can pass any i18next options
                // pass following options to allow message content as a key
                i18nextOptions: {
                    debug: true, //process.env.NODE_ENV === "development",
                    interpolation: {
                        escapeValue: false // not needed for react as it escapes by default
                    },
                    keySeparator: false,
                    nsSeparator: false
                }
            }
        },
        `gatsby-plugin-fontawesome-css`,
        {
            resolve: `gatsby-plugin-tawk`,
            options: {
                tawkId: "5c6245af6cb1ff3c14cc1314",
                // get this from the tawk script widget
            },
        },
        //{
        //resolve: 'gatsby-plugin-mailchimp',
        //options: {
        //endpoint: '', // string; add your MC list endpoint here; see instructions below
        //timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
        //},
        //},
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}