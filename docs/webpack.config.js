const path = require("path");
const eslintFriendlyFormatter = require("eslint-friendly-formatter");

module.exports = {
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        enforce: "pre",
        options: {
          formatter: eslintFriendlyFormatter
        }
      },
      {
        test: /\.js/,
        loaders: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loaders: ["vue-loader"],
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue: "vue/dist/vue.js"
    }
  },

  entry: "./index.js",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.js",
    publicPath: "/build/"
  },

  devServer: {
    contentBase: __dirname,
    port: 3030
  }
};
