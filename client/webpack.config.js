const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const dev = process.argv.indexOf('-p') == -1;

const basePath = __dirname;
const outputPath = path.join(basePath, "public");
const publicPath = (dev ? '' : '/event-control') + '/public/';
const devServerPort = 9090;

module.exports = {
	entry: {
		main: "./index.jsx"
	},

	output: {
        path: outputPath,
        filename: "[name].js",
        publicPath: publicPath,
    },

    resolve: {
    	alias: {
    		source: path.resolve(__dirname, 'source'),
    		screens: path.resolve(__dirname, 'source/Screens')
    	}
    },

    devServer: {
    	port: devServerPort,
    	publicPath: "http://localhost:"+devServerPort+"/public/",
	    contentBase: __dirname,
	    hot: true,
	    inline: true,
	    disableHostCheck: true
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