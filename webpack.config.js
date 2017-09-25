module.exports = {
  entry: __dirname + '/src/App.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: __dirname + '/public',
    port: 3333
  }
};
