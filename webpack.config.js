const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./src/main.js`,
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlPlugin({ template: `./src/index.html` }),
    new HtmlPlugin({ template: `./src/priority.html`, filename: 'priority.html' }),
    new HtmlPlugin({ template: `./src/other.html`, filename: 'other.html' }),
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
            attrs: false
          }
        }
      }      
    ]
  }
};
