var webpack = require('webpack');
var path = require('path');
var classNames = require('classnames');
//require('font-awesome-webpack');

var BUILD_DIR = path.resolve(__dirname);
//var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
	entry: [
		'webpack/hot/only-dev-server', //"only" prevents reload on syntax errors
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
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;