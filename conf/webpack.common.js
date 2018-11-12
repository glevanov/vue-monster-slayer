const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CssoWebpackPlugin = require("csso-webpack-plugin").default;

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(process.cwd(), "./dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: path.resolve(process.cwd(), "./node_modules/"),
        options: {
          presets: ["env"]
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: { importLoaders: 1 }
            },
            {
              loader: "sass-loader"
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: () => [require("autoprefixer")()]
              }
            }
          ]
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader?name=fonts/[name].[ext]",
        exclude: path.resolve(process.cwd(), "./src/img/")
      },
      {
        test: /\.(svg|jpg|png)$/,
        loader: "file-loader?name=img/[name].[ext]",
        exclude: path.resolve(process.cwd(), "./src/fonts/")
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], { root: process.cwd() }),
    new ExtractTextPlugin("styles.css"),
    new CssoWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
};
