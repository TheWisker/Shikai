const path = require("path");

//Plugins
const CssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const pkg = require('./package.json');

const devMode = process.env.NODE_ENV != "production";

const license_banner = `
${pkg.name} ${pkg.version} distribution
            
Copyright (c) 2023, ${pkg.author}
All rights reserved.
                            
This source code is licensed under the GNU license found in the
LICENSE file in the root directory of this source tree.

License information can be found in the LICENSE.shikai file.
`

module.exports = {
    entry: {
        index: path.resolve("./src/js/index.jsx"),
        monitor: path.resolve("./src/js/monitor.jsx")
    },
    output: {
        filename: "[name].js",
        path: path.resolve("./dist")
    },
    mode: devMode ? "development" : "production",
    plugins: [
        new HtmlPlugin({
            filename: "index.html",
            template: "src/index.html",
            chunks: ["index"],
            inject: "body"
        }),
        new HtmlPlugin({
            filename: "monitor.html",
            template: "src/index.html",
            chunks: ["monitor"],
            inject: "body"
        }),
        new CssExtractPlugin({
            filename: "[name].css"
        }),
        new CopyPlugin({
            patterns: [{
                from: "./src/assets/runtime",
                to: "./assets"
            }]
        }),
        new webpack.BannerPlugin({banner: license_banner})
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    devMode ? "style-loader" : CssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: devMode
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer"
                                    ]
                                ]
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: devMode,
                            sassOptions: {
                                outputStyle: devMode ? "expanded" : "compressed"
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_module/ ,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        envName: devMode ? "development" : "production"
                    }
                }
            },
            {
                test: /\.svg$/,
                use: [{loader: "svg-react-loader"}]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {filename: "assets/fonts/[name][ext]"}
            },
            {
                test: /\.(yml)$/i,
                type: "asset/resource",
                generator: {filename: "[name][ext]"}
            }
        ]//noParse: /\.(woff|woff2|eot|ttf|otf)$/
    },
    resolve: {
        extensions: [".js", ".min.js", ".jsx"],
        mainFiles: ["index"],
        modules: ["src/js", "./node_modules", "src"]
    },
    optimization: {
        minimize: !devMode,
        minimizer: [
            new CssMinimizerPlugin(), 
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false
                    }
                },
                extractComments: {
                    filename: "LICENSE.shikai",
                    condition: /^\**!|@preserve|@license|@cc_on/i,
                    banner: license_banner
                }
            })
        ],
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    type: "css/mini-exctract",
                    chunks: "all",
                    enforce: true
                }
            }
        }
    },
    devtool: devMode ?  "eval" : false
};