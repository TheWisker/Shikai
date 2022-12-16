const path = require("path");
//const webpack = require("webpack");

//Plugins
const CssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
//const CopyPlugin = require("copy-webpack-plugin");

const devMode = process.env.NODE_ENV != "production";

module.exports = {
    entry: path.resolve("./src/js/index.jsx"),
    output: {
        filename: "index.js",
        path: path.resolve("./out")
    },
    mode: devMode ? "development" : "production",
    plugins: [
        new HtmlPlugin({
            template: "src/index.html",
            inject: "body"
        }),
        new CssExtractPlugin({
            filename: "index.css"
        }),
        //new CopyPlugin({patterns: []})
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    devMode ? "style-loader" : CssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: devMode
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
                        //plugins: ["@babel/plugin-syntax-jsx"]
                    }
                }
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: "svg-react-loader"
                }]
            }
        ]
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
                extractComments: false
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