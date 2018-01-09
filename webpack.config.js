const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
	entry: `./src/main.js`,
	output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
	plugins: [
		new HtmlPlugin({ template: `./src/index.html` }),
		// new HtmlPlugin({ template: `./src/toc.html`, filename: `toc.html` }),
		new HtmlPlugin({ template: `./src/article1.html`, filename: `article1.html` }),
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