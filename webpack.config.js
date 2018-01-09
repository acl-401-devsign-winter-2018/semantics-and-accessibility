const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./src/main.js`,
  plugins: [
    new HtmlPlugin({ template: `./src/index.html` }),
    new HtmlPlugin({ template: `./src/a-new-hope.html`, filename: `a-new-hope.html`}),
    new HtmlPlugin({ template: `./src/empire-strikes-back.html`, filename: `empire-strikes-back.html`}),
    new HtmlPlugin({ template: `./src/return-of-jedi.html`, filename: `return-of-jedi.html`})
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