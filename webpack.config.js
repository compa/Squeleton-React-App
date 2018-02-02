const path = require("path");
module.exports = {
  entry: ["./components/app.js"],
  output: {
    path: path.resolve(__dirname, ""),
    filename: "bundle.jsº"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
    loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', { "modules": false }]
                }
            }
        ]
  }
};
