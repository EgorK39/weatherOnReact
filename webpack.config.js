const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.tsx"),
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {template: "./src/index.html"}),
        new Dotenv(),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: path.join(__dirname, "./node_modules/"),
                use: {
                    loader: "ts-loader"
                }

            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }, {
                test: /\.ttf$/,
                type: "asset/inline",
                use: {
                    loader: "url-loader"
                }
            }
        ]
    }
}