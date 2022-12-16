const path = require("path");
const webpack = require("webpack");

//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const SyntaxJsx = require("@babel/plugin-syntax-jsx")
//const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

//const stylesHandler = MiniCssExtractPlugin.loader;

//const uncompressedPostCSSConfig = [ require('autoprefixer')() ];
//const compressedPostCSSConfig = [ ...uncompressedPostCSSConfig, require('cssnano')({ 'preset': 'default' }) ];

const config = {
    entry: path.resolve("../src/js/Main.js"),
    output: {
        path: path.resolve("../out"),
        filename: "Main.js",
    },
    //devServer: {
        //open: true,
        //host: 'localhost'
    //},
    plugins: [
        //new webpack.DefinePlugin({
           //"process.env.NODE_ENV": JSON.stringify(env.NODE_ENV)
        //})
        //new HtmlWebpackPlugin({
          //  template: path.resolve("../src/index.html")
        //}),

       // new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                use: {
                    loader: "babel-loader",
                    options: {
                        "plugins": ["@babel/plugin-syntax-jsx"]
                    }
                } //"eslint-loader"
                
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                      loader: "style-loader"
                    },
                    {
                      loader: "css-loader",
                      options: {
                        url: false,
                        sourceMap: !isProduction
                      }
                    },
                    //{
                      //loader: "postcss-loader",
                      //options: {
                        //plugins: isProduction ? compressedPostCSSConfig : uncompressedPostCSSConfig
                      //}
                    //},
                    {
                      loader: "sass-loader",
                      options: {
                        sourceMap: !isProduction
                      }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset'
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: "svg-react-loader"
                }]
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    devtool: (isProduction) ? 'source-map' : 'eval-source-map',
    resolve: {
        extensions: [ ".js", ".min.js", ".jsx" ],
        mainFiles: ["Main", "index"],
        modules: ["../src/js", "../src/js/Libraries", "./node_modules", "../src"]
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        //config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        
    } else {
        config.mode = 'development';
    }
    return config;
};