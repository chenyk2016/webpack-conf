const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sprites = require('postcss-sprites');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    open: false,
  },
  resolve: {
    alias: {
      'Assets': path.resolve(__dirname, 'src/assets'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          // {
          //   loader: "eslint-loader",
          //   options: {
          //     // eslint options (if necessary)
          //     // community formatter
          //     formatter: require("eslint-friendly-formatter"),
          //   }
          // }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              // publicPath: '../',
              // only enable hot in development
              hmr: process.env.NODE_ENV === 'development',
              // if hmr does not work, this is a forceful method.
              reloadAll: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              // modules: true, // 模块化的css才需要这个。
              importLoaders: 2, // 使用 css-loader 之前有几个loader， 默认0
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer'), // 配置在.browserslistrc 文件中，以便和js polifill公用
                sprites(),
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              // publicPath: '../',
              // only enable hot in development
              hmr: process.env.NODE_ENV === 'development',
              // if hmr does not work, this is a forceful method.
              reloadAll: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              // modules: true, // 模块化的css才需要这个。
              importLoaders: 2, // 使用 css-loader 之前有几个loader， 默认0
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer'), // 配置在.browserslistrc 文件中，以便和js polifill公用
                sprites(),
              ]
            }
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 0,
          name: '[name].[hash:7].[ext]' // path是原路径，name是原文件名，hash:7是七位的哈希值，ext是文件后缀
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // 用 contenthash 设置长期缓存
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
       template: './public/index.html',
       title: '动态标题',
       inject: 'body',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
