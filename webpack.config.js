var path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `bundle.js?[hash:7]`,
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      api: path.resolve(__dirname, 'src/api/'),
      state: path.resolve(__dirname, 'src/state/'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[name]-[hash:base64:8]-[local]',
              },
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
