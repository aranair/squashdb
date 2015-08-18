// webpjs/ack.config.js
module.exports = {
  entry: './js/bundle.js',
  output: {
    filename: './static/js/bundle.js'       
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      { test: /\.scss$/, loader: "style!css!sass" }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee'] 
  },
  node: {
    filename: true,
    dirname: "mock",
    process: false,
    global: true
  }
};
