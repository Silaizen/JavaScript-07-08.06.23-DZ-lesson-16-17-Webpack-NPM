const {join, resolve} = require  ('path');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin')


module.exports = {
    entry:'./src/index.js',
    output:{
        path: resolve(__dirname, 'dist'),
        filename:'[name]-[fullhash].js',
        clean:true
    },

module:{
    rules:[
        {
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ],
        },
        {
            test:/\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource'
        },
        {
            test:/\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
        }
    ]
},
plugins: [
    new MiniCssExtractPlugin ({
        filename: '[name]-[fullhash].css',
    }),
    new HtmlWebpackPlugin ({
        template: './src/index.html',
    }),
    
],
devServer: {
    port: 4000,
    static: {
        directory: join(__dirname, 'src')
    }
}
}
