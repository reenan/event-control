const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const dev = process.argv.indexOf('-p') == -1;

const basePath = __dirname;
const outputPath = path.join(basePath, "build");
const publicPath = (dev ? '' : '/event-control') + '/build/';
const devServerPort = 9090;

console.log('\n---------------------');
console.log('------- BEGIN -------');
console.log('---------------------\n');

console.log('------- WEBPACK CONFIG *ADM* -------');
console.log(' ** ENV VARS **');
console.log('  - dev: ', dev);
console.log('  - basePath: ', basePath);
console.log('  - outputPath: ', outputPath);
console.log('  - publicPath: ', publicPath);
console.log('  - __dirname: ', __dirname);
console.log('----------------------------------------\n');


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
    	port: devServerPort,
    	publicPath: "http://localhost:"+devServerPort+"/build/",
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
