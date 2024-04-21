const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const appDirectory = path.resolve(__dirname);
console.log(appDirectory);
const { presets, plugins } = require(`${appDirectory}/babel.config.js`);
const compileNodeModules = [
  // Add every react-native package that needs compiling
  'react-native-qrcode-svg',
  'react-native-camera',
  'react-native-drop-shadow',
  'react-native-gesture-handler',
  'react-native-qrcode-scanner',
  'react-native-reanimated',
  'react-native-reanimated-carousel',
  'react-native-safe-area-context',
  'react-native-screens',
  'react-native-snap-carousel',
  'react-native-svg',
  'react-native-vector-icons',
  'react-native-video',
  'react-native',
  '@react-native',

].map((moduleName) => path.resolve(appDirectory, `/node_modules/${moduleName}`));

const babelLoaderConfiguration = {
  test: /\.(js|jsx|ts|tsx)$/, // Updated to include .jsx
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname, "index.web.ts"), // Entry to your application
    path.resolve(__dirname, "App.web.tsx"), // Updated to .jsx
    // path.resolve(__dirname, "src"),
    // path.resolve(__dirname, "component"),
    ...compileNodeModules,
  ],
  use: {
    loader: "babel-loader",
    options: {
      cacheDirectory: true,
      presets,
      plugins,
    },
  },
};

const svgLoaderConfiguration = {
  test: /\.svg$/,
  use: [
    {
      loader: "@svgr/webpack",
    },
  ],
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: "url-loader",
    options: {
      name: "[name].[ext]",
    },
  },
  type: 'asset/resource',
};

const avLoaderConfiguration = {
  test: /\.(mp3|mp4)$/,
  use: {
    loader: "url-loader",
    options: {
      name: "[name].[ext]",
    },
  },
  type: 'asset/resource',
};

const tsLoaderConfiguration = {
  test: /\.ts$/,
  exclude: /node_modules/, // this line as well
  use: {
    loader: 'ts-loader',
    options: {
      compilerOptions: {
        noEmit: false, // this option will solve the issue
      },
    },
  },
};

module.exports = {
  entry: {
    app: path.join(__dirname, "index.web.ts"),
  },
  output: {
    path: path.resolve(appDirectory, "dist"),
    publicPath: "/",
    filename: "rnw.bundle.js",
  },
  resolve: {
    extensions: [".web.tsx", ".web.ts", ".tsx", ".ts", ".web.js", ".js"],
    alias: {
      "react-native$": "react-native-web",
    },
  },
  module: {
    rules: [
      tsLoaderConfiguration,
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      svgLoaderConfiguration,
      avLoaderConfiguration,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
    new CopyWebpackPlugin({
      patterns: [
      { from: 'assets', to: 'assets' }
    ]})
  ],
};