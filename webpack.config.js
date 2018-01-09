const HtmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: `./src/main.js`,
  plugins: [
    new HtmlPlugin({ template: `./src/index.html` }),
    new HtmlPlugin({ template: `./src/a-new-hope.html`, filename: `a-new-hope.html`}),
    new HtmlPlugin({ template: `./src/empire-strikes-back.html`, filename: `empire-strikes-back.html`}),
    new HtmlPlugin({ template: `./src/return-of-jedi.html`, filename: `return-of-jedi.html`}),
    new CopyWebpackPlugin([{ from: 'src/images/Star_wars_1977_us.svg.png', to: 'Star_wars_1977_us.svg.png' }])
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