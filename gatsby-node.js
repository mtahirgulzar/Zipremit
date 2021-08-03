/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
*/

const path = require("path")
const webpack = require("webpack")

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  const { setWebpackConfig } = actions

  if (stage === "build-html") {
    setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
        ],
      },
    })
  }

  setWebpackConfig({
    resolve: {
      modules: [
        "node_modules",
        path.resolve(__dirname, "src")
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ],
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/login/) || page.path.match(/register/) || page.path.match(/password/)) {
    page.context.layout = "authentication"
    createPage(page)
  }

  if (page.path.match(/guides/) || page.path.match(/terms/)) {
    page.context.layout = "alternate"
    page.context.title = page.path.match(/guides/) ? "Guide" : "Terms and Conditions"
    createPage(page)
  }
}
