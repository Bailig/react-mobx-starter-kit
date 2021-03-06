var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    
    output:{
        path: __dirname + '/app/js',
        filename: 'bundle.js'
    },
    
    module: {
        loaders:[
            {
                test: /\.js$/,
                //include: /(src)/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ] //loaders
    }, //module
    
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ] // plugins
}; //module.exports