const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ruleForStyles = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};
const ruleForJavaScript = {
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "babel-loader",
    },
  ],
};
const ruleForImages = {
  test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
  type: "asset/resource",
};
const ruleForSVGandFonts = {
  test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
  type: "asset/inline",
};
const rules = [
  ruleForStyles,
  ruleForJavaScript,
  ruleForImages,
  ruleForSVGandFonts,
];
module.exports = {
  entry: path.resolve(__dirname, ".", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      components: path.resolve(__dirname, "src/components/"),
    },
  },
  module: {
    rules: rules,
  },
  output: {
    path: path.resolve(__dirname, ".", "./build"),
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, ".", "./src/index.html"),
    }),
  ],
  devServer: {
    open: true, // this opens the browser
    port: 3000,
    // overlay: true, // show errors on browser ...me da errores
    compress: true,
  },
};
