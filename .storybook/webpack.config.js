// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require("path");
const fs = require("fs");

module.exports = {
	plugins: [
		// your custom plugins
	],
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			atoms: "../client/components/atoms",
			molecules: "../client/components/molecules",
			organisms: "../client/components/organisms",
			views: "../client/views",
			layouts: "../client/views/layouts",
			utilities: "../client/utilities"
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader!ts-loader"
			}
		]
	}
};
