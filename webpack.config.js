const HtmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: `./src/main.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  },
  plugins: [
    new HtmlPlugin({ template: `./src/index.html` }),
    new HtmlPlugin({ template: `./src/coastal-rebuilding.html`, filename: `coastal-rebuilding.html`}),
    new HtmlPlugin({ template: `./src/dna-software.html`, filename: `dna-software.html`}),
    new HtmlPlugin({ template: `./src/zombie-cookie.html`, filename: `zombie-cookie.html`}),
    new CopyWebpackPlugin([{ from: 'src/images/ivan-logo.png', to: 'ivan-logo.png' }])
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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1, }
          },
          'postcss-loader'
        ]
      }
    ]
  }
};