const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.tsx",
    target: "web",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "build"),
filename: "bundle.js",
},
resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
},
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
module: {
    rules: [
        {
            test: /\.(ts|tsx)$/,
            loader: "awesome-typescript-loader",
        },
        {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader",
        }
    ],
},
plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
})
],
};
