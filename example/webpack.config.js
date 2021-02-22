process.env.NODE_ENV = "production"

module.exports = {
  target: "node",
  entry: ["./index.js"],
  mode: process.env.NODE_ENV,
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
                    node: true,
                  },
                },
              ],
            ],
            plugins: ["macros"],
          },
        },
      },
    ],
  },
}
