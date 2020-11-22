const path = require('path'); // 파일이나 디렉터리 경로를 다루기 위한 NodeJS 기본 모듈
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
require('@babel/polyfill');

module.exports = (env, opts) => {
  const config = {
    resolve: {
      extensions: ['.js', '.vue'],

      alias: {
        '~': path.resolve(__dirname),
        scss: path.resolve(__dirname, './scss/'), // E.g. `import "scss/style";` in style tag
      },
    },
    entry: {
      app: ['@babel/polyfill', path.join(__dirname, 'main.js')],
    },
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, 'dist'),
    },
    // 모듈 처리 방식을 설정
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader', // 1st
            'css-loader', // 2nd
            'postcss-loader', // 3rd
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader', // 1st
            'css-loader', // 2nd
            'postcss-loader', // 3rd
            'sass-loader', // 4th
          ],
        },
        {
          test: /\.?js$/,
          exclude: /node_modules/, // 제외할
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(png|jpe?g|gif|woff2?|ttf|otf|eot)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            esModule: false,
          },
        },
        {
          test: /\.(svg|ico)$/,
          use: [
            {
              loader: 'url-loader',
              options: { limit: 5000, esModule: false },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'index.html'),
      }),
      new VueLoaderPlugin(),
    ],
  };

  if (opts.mode === 'development') {
    return merge(config, {
      devtool: 'eval',
      devServer: {
        open: true,
        hot: true,
      },
    });

    // opts.mode === 'production'
  } else {
    return merge(config, {
      devtool: 'cheap-module-source-map',
      plugins: [
        // 빌드(build) 직전 `output.path`(`dist` 디렉터리) 내 기존 모든 파일 삭제
        new CleanWebpackPlugin(),
      ],
    });
  }
};
