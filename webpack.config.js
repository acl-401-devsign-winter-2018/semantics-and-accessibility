const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
	entry: `./src/main.js`,
	output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
	plugins: [
		new HtmlPlugin({ template: `./src/index.html` }),
		new HtmlPlugin({ template: `./src/about.html`, filename: `about.html` }),
		new HtmlPlugin({ template: `./src/contact.html`, filename: `contact.html` }),
		new HtmlPlugin({ template: `./src/article1.html`, filename: `article1.html` }),
		new HtmlPlugin({ template: `./src/article2.html`, filename: `article2.html` }),
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