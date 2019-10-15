const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    open: false,
  },
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, 'src/assets'),
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
      // 不需要指定 url-loader ,css-loader会自动引用
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              // modules: true, // 模块化的css才需要这个。
              importLoaders: 1, // 使用 css-loader 之前有几个loader， 默认0
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer'), // 配置在.browserslistrc 文件中，以便和js polifill公用
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
       template: './public/index.html',
       title: '动态标题',
       inject: 'body',
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
