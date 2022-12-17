const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path'); // <- сохраняем в константу path путь к проекту

module.exports = {
  plugins: [new ESLintPlugin()],
  entry: './src/index.js', // <- откуда webpack будет брать данные для сборки
  output: {
    filename: 'bandle.js', // <- где будет происходить сборка проекта
    path: path.resolve(__dirname, 'dist'), // <- в какой папке будет происходить сохранение "bandle.js"
  },
};
