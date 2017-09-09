var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		main: ".\\site\\index.jsx"
	},
	output: {
		filename: ".\\site\\bundle.js"
	},
	devtool: "source-map",
	module: {
		loaders: [
			{
				test: /\.(jsx|js)$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ["react-hot-loader"]
			},
			{
				test: /.(jsx|js)?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: {
					presets: ["es2015", "react", "stage-0"]
				}
			},
			{
                test: /\.(css|scss)$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            { 
            	test: /\.(png|gif|jpe?g||eot|svg|ttf|woff)$/, 
            	loader: "file-loader" 
            }
		]
	}
};
