const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");


const PATHS = {
  source: path.join(__dirname, "src"),
  build: path.join(__dirname, "dist")
};

module.exports = {
  entry: PATHS.source + "/index.js",
  output: {
    path: PATHS.build,
    filename: "./js/app.js"
  },
  module: {
    rules: [
    {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
           'css-loader'
        ]
    },
    {
        test: /\.(sa|sc)ss$/,
        use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
                loader:"css-loader"
            }, {
                loader:"sass-loader"
            }
        ]
    },
      {
        test: /\.(gif|png|jpg)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "img/",
            publicPath: "img/"
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Tools"
    }),
    new MiniCssExtractPlugin({
        filename: 'css/styles.css'
      }),
      new CompressionPlugin({
        test: /\.(gif|png|jpg)$/,
      }),
      new PrettierPlugin()
  ]
};
