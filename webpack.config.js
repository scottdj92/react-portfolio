var webpack = require('webpack');
var path = require('path');
require('font-awesome-webpack');

var BUILD_DIR = path.resolve(__dirname);
//var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
	entry: [
		'webpack/hot/only-dev-server', //"only" prevents reload on syntax errors
		"font-awesome-webpack!./font-awesome.config.js",
		"./src/client/app/index.jsx",
		],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				loaders: ['react-hot', 'babel'],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      	{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;