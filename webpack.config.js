var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
	entry: {
		main: "./index.jsx"
	},

	output: {
        path: path.join(__dirname, "build"),
        publicPath: "/build/",
        filename: "[name].js"
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
