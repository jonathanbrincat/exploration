//webpack ./src/js/testicles/module1.js src/bundle.js

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
	context: __dirname + "/src",
	devtool: debug ? "inline-sourcemap" : null,
	//entry: "./js/testicles/main.js",
	entry: "./js/spa/main.js",

	module: {
		loaders: [

			// Babel
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-0"],
					plugins: ["react-html-attrs", "transform-class-properties", "transform-decorators-legacy"]
				}
			}
		]
	},

	output: {
		//path: __dirname + "/src" + "/scripts",
		//path: __dirname + "/dist/scripts",
		path: __dirname + "/src/dist/scripts",
		filename: "scripts.js"
	},

	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],

	devServer: {
		'content-base': 'src',
		'port': 4444,
		'hot': true,
		'inline': true
	}
};
