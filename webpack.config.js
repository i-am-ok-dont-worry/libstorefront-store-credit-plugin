const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.resolve(__dirname, 'index.ts'),
    mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: [/node_modules/, /dist/, /tests/],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'index.js',
        path: path.resolve(process.cwd(), 'dist'),
        library: 'LSFPlugin',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true
    },
    devtool: 'source-map',
    optimization: {
        minimize: false
    },
    externals: [nodeExternals()]
};
