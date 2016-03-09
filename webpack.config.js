const path = require('path');
const webpack = require('webpack');

const env = process.env.NODE_ENV;

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin()
];

const prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
];

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  entry: [
    path.join(__dirname, 'src', 'client', 'index')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: path.join('js', 'app.js'),
    publicPath: 'public'
  },
  plugins: plugins.concat(env === 'production' ? prodPlugins : []),
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: path.join(__dirname, 'src/client'),
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      include: path.join(__dirname, 'src', 'client')
    }]
  }
};
