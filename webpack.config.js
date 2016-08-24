//webpack ./src/js/testicles/module1.js src/bundle.js

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
	context: __dirname + "/src",
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./js/testicles/main.js",
	output: {
		//path: __dirname + "/src" + "/scripts",
		path: "dist/scripts",
		filename: "scripts.js"
	},

	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],
};
