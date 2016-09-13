//DEVNOTE: webpack task is broken on webpack-dev-server(npm run dev); it doesn't recompile the build

//webpack ./src/js/testicles/module1.js src/bundle.js

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

var path = require("path");

const PROJECT = "testicles"; //testicles, spa, todo

module.exports = {
	//context: __dirname + "/src",
	//context: __dirname,

	devtool: debug ? "inline-sourcemap" : null,

	//DEVNOTE: meant to override the flag/options in the cmd but doesn't
	/*devServer: {
		'content-base': 'src',
		'port': 4444,
		'hot': true,
		'inline': true
	},*/

	entry: "./src/js/" + PROJECT + "/main.js",

	/*entry: {
		app: ["./src/js/" + PROJECT + "/main.js"]
	},*/

	// relative to root - pix8.git.houseoffraser/exploration/
	output: {
		//path: "./dist/scripts",
		path: path.resolve(__dirname, "dist/scripts"),
		publicPath: "/scripts/",
		filename: "bundle.js"
	},

	module: {
		loaders: [
			//CSS Loader
			{
				test: /\.css?$/,
				//include: path.join(__dirname, "src/css"),
				exclude: /(node_modules|bower_components)/,
				//loader: "style-loader!css-loader?sourceMap"
				loader: 'style!css'
			},

			//SASS Loader
			/*{
				test: /\.scss?$/,
				//include: path.join(__dirname, "src/sass"),
				exclude: /(node_modules|bower_components)/,
				loader: "style-loader!css-loader!sass-loader?sourceMap"
			},*/

			// Babel Loader
			{
				test: /\.js?$/,
				//include: path.join(__dirname, "src/js"),
				//include: path.join(__dirname, "src/" + PROJECT + "/js"),
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-0"],
					plugins: ["react-html-attrs", "transform-class-properties", "transform-decorators-legacy"]
				}
			}
		]
	},

	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),

		//hot reload apparently
		//new webpack.HotModuleReplacementPlugin(),
		//new webpack.NoErrorsPlugin()
	]
};
