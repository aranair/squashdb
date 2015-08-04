// webpack.config.js
module.exports = {
  entry: './js/bundle.js',
  output: {
    filename: 'test.js'       
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee'] 
  }
};
