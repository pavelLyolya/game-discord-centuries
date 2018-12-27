const path = require('path');

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'main.js',
    publicPath: 'dist/',
  },
  devServer: {
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
    ],
  },
  devtool: 'eval-sourcemap',
};

module.exports = (env, options) => {
  const production = options.mode === 'production';
  config.devtool = production ? false : 'eval-sourcemap';
  return config;
};
