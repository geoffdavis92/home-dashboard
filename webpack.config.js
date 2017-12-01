"use strict";

const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: {
		app: "./client/index.tsx"
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "server/assets/js")
	},
	devtool: "inline-source-map",
	resolve: {
		enforceExtension: false,
		extensions: [".ts", ".tsx", ".js", ".json"],
		alias: {
			components: path.resolve(__dirname, "client/components"),
			atoms: path.resolve(__dirname, "client/components/atoms"),
			molecules: path.resolve(__dirname, "client/components/molecules"),
			organisms: path.resolve(__dirname, "client/components/organisms"),
			utilities: path.resolve(__dirname, "utilities"),
			views: path.resolve(__dirname, "client/views")
		}
	},
	externals: {
		react: "React",
		"react-dom": "ReactDOM"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader!ts-loader"
			}
		]
	},
	plugins: [
		process.env.NODE_ENV && process.env.NODE_ENV === "production"
			? new webpack.DefinePlugin({
					"process.env": {
						NODE_ENV: JSON.stringify("production")
					}
				})
			: () => null,
		process.env.NODE_ENV && process.env.NODE_ENV === "production"
			? new webpack.optimize.UglifyJsPlugin()
			: () => null
	],
	devServer: {
		contentBase: path.join(__dirname),
		compress: true,
		// hot: true,
		port: 5555
	}
};
