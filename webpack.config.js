const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	mode: 'development',

	entry: './src/main.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/dist'),
	},

	module: {
		rules: [
			// ... other rules
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.html$/i,
				loader: "html-loader"
			}
		]
	},

	plugins: [
		// make sure to include the plugin!
		new VueLoaderPlugin(),

		new webpack.DefinePlugin({
           __VUE_PROD_DEVTOOLS__: 'false'
       	})
	],

	resolve: {
		alias: {
			vue: 'vue/dist/vue.esm-browser.prod.js',
			'@': path.resolve(__dirname)
		},
		extensions: [".ts", ".tsx", ".js", ".vue", ".json"],
		modules: ['src', 'node_modules']
	}
};