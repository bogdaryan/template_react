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
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 512,
                        quality: 85
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(mov|mp4)$/,
                use: [
                    'file-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};