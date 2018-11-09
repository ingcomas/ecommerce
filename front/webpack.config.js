const path = require('path')

module.exports = {
  // context: __dirname,
  entry: ['babel-polyfill','./src/index.js'],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, '/dist'),
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['env', 'stage-0', 'react'] }
      }
    ]
  }
}