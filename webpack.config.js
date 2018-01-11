const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./src/main.js`,
  plugins: [
    new HtmlPlugin({ template: `./src/index.html` }),
    new HtmlPlugin({ template: `./src/a-short-history-of-the-brief-and-bumpy-life-of-the-voting-fraud-commission.html`, filename: `a-short-history-of-the-brief-and-bumpy-life-of-the-voting-fraud-commission.html` }),
    new HtmlPlugin({ template: `./src/canadian-research-adds-to-worry-over-an-environmental-threat-the-pentagon-has-downplayed-for-decades.html`, filename: `canadian-research-adds-to-worry-over-an-environmental-threat-the-pentagon-has-downplayed-for-decades.html` }),
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
