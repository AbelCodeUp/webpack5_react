const { merge } = require("webpack-merge");
const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const argv = require("yargs-parser")(process.argv.slice(2));
const _mode = argv.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const webpack = require('webpack');
// const _modeflag = _mode == "production" ? true : false;

let webpackBaseConfig = {
    entry: {
        app: resolve('./src/index.tsx')
    },
    output: {
        filename: '[name].[contenthash:5].js',
        path: resolve(__dirname, 'dist/assets/'),
        publicPath: '/',
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)/,
                type: 'asset'
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                include: [resolve("src")],
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    "postcss-loader"
                ]
            }
        ],
    },
    resolve: {
        alias: {
            '@assets': resolve('src/assets'),
            '@components': resolve('src/components'),
            '@models': resolve('src/models'),
            '@routes': resolve('src/routes'),
            '@pages': resolve('src/pages'),
            '@utils': resolve('src/utils'),
            '@tools': resolve('src/tools'),
        },
        modules: ['node_modules', resolve('src')],
        extensions: ['.js', '.ts', '.tsx', 'jsx'],
    },
    externals: {
        // React: "react",
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "webpack5-demo",
            filename: "index.html",
            template: resolve(__dirname, "./src/public/index-dev.html")
        }),
        new MiniCssExtractPlugin({
            filename: "styles/[name].[contenthash:5].css",
            chunkFilename: "styles/[name].[contenthash:5].css"
        })
    ],

};
module.exports = merge(_mergeConfig, webpackBaseConfig);
