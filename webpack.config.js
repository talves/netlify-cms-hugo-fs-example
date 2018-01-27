const path = require('path');
const fileSystemAPIPlugin = require('./scripts/fs/fs-express-api');

const HOST = 'localhost';
const PORT = '8080';

module.exports = {
  entry: {
    main: ["./src/index.js"]
  },
  output: {
    path: path.join(__dirname, "public/assets/js"),
    publicPath: "/",
    filename: "[name].js"
  },
  devServer: {
    contentBase: 'example/',
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {"Access-Control-Allow-Origin": "*"},
    before: fileSystemAPIPlugin,
  },
}