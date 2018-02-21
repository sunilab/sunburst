var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './index.js'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../server/static')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};