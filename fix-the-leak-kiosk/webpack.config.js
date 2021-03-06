require("babel-polyfill");
var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// Phaser webpack config
var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');


module.exports = {
	entry: ['babel-polyfill', 'whatwg-fetch', './src/app'],
	output: {
		path: './dist',
		filename: 'app.bundle.js',
		libraryTarget: 'var',
        library: 'QsoftGame'
	},
	externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "Phaser": "Phaser"
    },
	watch: true,
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
		// new webpack.optimize.UglifyJsPlugin(),
		// new webpack.optimize.OccurrenceOrderPlugin(),
		new BrowserSyncPlugin({
			// browse to http://localhost:3000/ during development, 
			// ./dist directory is being served 
			host: 'localhost',
			port: 4000,
			open: true,
			server: {
				baseDir: ['./', './dist']
			}
		})
	],
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			include: path.join(__dirname, 'src'),
			loader: 'babel-loader'
		}, {
				test: /pixi\.js/,
				loader: 'expose?PIXI'
			}, {
				test: /phaser-split\.js$/,
				loader: 'expose?Phaser'
			}, {
				test: /p2\.js/,
				loader: 'expose?p2'
			}, {
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				include: path.join(__dirname, 'assets'),
				loader: 'file-loader?limit=100000'
			}]
	},
	resolve: {
		alias: {
			'phaser': phaser,
			'pixi': pixi,
			'p2': p2

		}
	}
};