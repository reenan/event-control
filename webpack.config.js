var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var dev = process.env.NODE_ENV !== "production";

var basePath = __dirname;
var outputPath = path.join(basePath, "build");
var publicPath = (dev ? '' : '/event-control') + '/build/';

module.exports = {
	entry: {
		main: "./index.jsx"
	},

	output: {
        path: outputPath,
        filename: "[name].js",
        publicPath: publicPath,
    },

    devServer: {
	    publicPath: "http://localhost:8080/build/",
	    contentBase: __dirname,
	    hot: true
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
					presets: ["env", "react", "stage-0"]
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
