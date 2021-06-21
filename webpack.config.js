const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PLUGINS = [
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, "src", "index.html")
	})
];

const LOADERS = [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: ["babel-loader"]
	},
	{
		test: /\.css$/,
		use: ["style-loader", "css-loader"]
	},
	{
		test: /\.(png|jpe?g|gif)$/i,
		use: ["file-loader"]
	}
];

module.exports = {
	entry: {
		index: path.resolve(__dirname, "src", "index.js")
	},
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "build")
	},
	plugins: PLUGINS,
	module: {
		rules: LOADERS
	},
	devServer: {
		port: 8080,
		historyApiFallback: true
	}
}
