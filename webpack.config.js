const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// Import open browser plugin
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');
const NODE_ENV = process.env.NODE_ENV || 'development'
const _PORT = process.env.REACT_PORT || 3030

const GLOBALS = {
    'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV)
    }
    // 'API_URL' : JSON.stringify(API_URL),
    // 'FULL_API_URL' : JSON.stringify(FULL_API_URL),
    // __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
};

var config = {
    entry: [
        './src/main.tsx'
    ],
    devtool: NODE_ENV ? 'inline-source-map' : 'inline-source-map',
    mode: NODE_ENV,
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({}),
        new webpack.DefinePlugin(GLOBALS),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin([dist])
    ],
    devServer: {
        inline: true,
        port: _PORT
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "tslint-loader",
                exclude: /node_modules/,
                enforce: "pre"
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            // {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192,
            //                 name: '[name].[hash:7].[ext]'
            //             }
            //         },
            //         {
            //             loader: 'img-loader',
            //             options: {
            //                 enabled: NODE_ENV !== 'development'
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.(scss)$/,
                use: [{
                    // Adds CSS to the DOM by injecting a `<style>` tag
                    loader: 'style-loader'
                },
                MiniCssExtractPlugin.loader,
                {
                    // Loader for webpack to process CSS with PostCSS
                    loader: 'css-loader'
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')
                            ]
                        }
                    }
                },
                {
                    // Loads a SASS/SCSS file and compiles it to CSS
                    loader: 'sass-loader'
                }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', 'css', '.jsx', '.json', '.ts', '.tsx']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, dist)
    }
}

if (NODE_ENV !== "production") {
    if (process.env.FROM_NODE) {
        config.entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000')
        config.plugins.push(new OpenBrowserPlugin({
            url: `http://localhost:${_PORT}`
        }))
        config.plugins.push(new webpack.HotModuleReplacementPlugin())
        config.plugins.push(new webpack.NoEmitOnErrorsPlugin())
    }
    config.entry.push('react-hot-loader/patch')
}

module.exports = config;
