var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: "index.html",
    inject: 'body'
  })],
  module: {
    loaders: [{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=./assets/[name].[ext]"
      }
    ]
  }
};
