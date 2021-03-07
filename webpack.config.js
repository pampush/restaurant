const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
            
                miniCss.loader,
                // Creates `style` nodes from JS strings
                //"style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader"
        ],
      },
      {
          test: /\.css$/,
          use: [
                miniCss.loader,
              //"style-loader",
                "css-loader"
          ]
      }
    ],
  },
  plugins: [
    new miniCss({
       filename: 'style.css',
    }),
 ]
};