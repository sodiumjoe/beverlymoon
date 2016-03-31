const path = require('path');
const webpack = require('webpack');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');

const {
  env: {
    NODE_ENV: env
  }
} = process;

const devPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('dev')
    }
  }),
  new webpack.HotModuleReplacementPlugin()
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

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin()
].concat(env === 'production' ? prodPlugins : devPlugins);

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  entry: {
    app: [
      path.join(__dirname, 'src', 'client', 'index.jsx')
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: path.join('js', 'app.js')
  },
  plugins: plugins.concat(env === 'production' ? prodPlugins : []),
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  lessLoader: {
    lessPlugins: [
      new LessPluginAutoPrefix({ browsers: ['last 2 versions'] })
    ]
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
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      include: path.join(__dirname, 'src', 'client')
    }]
  }
};
