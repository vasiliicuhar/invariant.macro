const webpack = require("webpack")

process.env.NODE_ENV ??= "production"

module.exports = {
  target: "node",
  mode: "production",

  entry: ["./invariant.js"],
  output: {
    library: "invariant",
    libraryTarget: "umd",
    filename: `invariant.${process.env.NODE_ENV}.cjs`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/env",
                {
                  targets: {
                    node: 14,
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      "process.env.NODE_ENV": process.env.NODE_ENV,
    }),
  ],
}
