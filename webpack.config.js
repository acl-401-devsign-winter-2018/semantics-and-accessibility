const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./src/main.js`,
  plugins: [
    new HtmlPlugin({ template: `./src/index.html` }),
    new HtmlPlugin({ template: `./src/pho.html`, filename: `pho.html` }),
    new HtmlPlugin({ template: `./src/chicken-salad.html`, filename: `chicken-salad.html` }),
    new CopyWebpackPlugin([
      {from: 'src/images', to: 'images'}
    ])
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
        },
      }     
    ]
  }
};