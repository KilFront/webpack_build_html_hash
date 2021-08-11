const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
      index: './js/index.js',
      about: './js/about.js',
      common: './js/common.js'
  },
  output: {
      // path: path.join(__dirname, "../dist/"),
      filename: "js/[name].[contenthash].js"
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
      {
        test:  /\.(sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
      minify: false,
      scriptLoading: 'blocking',
      chunks: ['xhr', 'util', 'index'],
      chunksSortMode: "manual"
    }),
    new HtmlWebpackPlugin({
        filename: 'about.html',
        template: "./about.html",
        chunks: ["about"]
    }),
  ]
}