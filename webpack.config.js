const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const projectRoot = path.resolve(__dirname);


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    resolve: {
        alias: {
            '@': projectRoot + '/src',
            '@components': projectRoot + '/src/components',
            '@styles': projectRoot + '/src/styles',
            '@assets': projectRoot + '/src/assets',
            '@images&video': projectRoot + '/src/img_video',
        },
        extensions: [
            '.js', '.json', '.css', '.scss', '.sass',
            '.svg', '.png', '.jpeg', '.gif'
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(mov|mp4)$/,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};
