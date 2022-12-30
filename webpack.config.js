const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path'); // <- сохраняем в константу path путь к проекту

module.exports = {
  plugins: [new ESLintPlugin()],
  entry: './src/index.ts', // <- откуда webpack будет брать данные для сборки
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bandle.js', // <- где будет происходить сборка проекта
    path: path.resolve(__dirname, 'dist'), // <- в какой папке будет происходить сохранение "bandle.js"
  },
};
