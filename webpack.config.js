const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports =  {
	mode: 'production',
	entry: "./dev.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'app.css'
        })],
        module: {
            rules: [
              {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader' ,'sass-loader']
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
              },
              {
                test: /.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
              },
              {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
              }
            ]
          },
          resolve: {
            extensions: ["*", ".js", ".jsx"]
          }
}
