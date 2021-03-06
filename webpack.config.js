const path = require('path');

const config = {
  entry: [
    '@babel/polyfill',
    './src/app.js',
  ],
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'main.js',
    publicPath: 'dist/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist/'),
    compress: true,
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  devtool: 'eval-sourcemap',
};

module.exports = (env, options) => {
  const production = options.mode === 'production';
  config.devtool = production ? false : 'eval-sourcemap';
  return config;
};
