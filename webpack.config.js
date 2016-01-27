var webpack = require('webpack');
var path = require('path');
var classNames = require('classnames');
//var fontAwesome = require('font-awesome-webpack');
//require('font-awesome-webpack!./font-awesome-config.js');

var BUILD_DIR = path.resolve(__dirname);
//var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
	entry: [
		'webpack/hot/only-dev-server', //"only" prevents reload on syntax errors
		//'font-awesome-webpack!/font-awesome-config.js',
		"./src/client/app/index.jsx",
		],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	devServer: {
		port: 1337
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['react-hot', 'babel'],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.less?/,
				loader: 'style!css!less'
			},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      	{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;