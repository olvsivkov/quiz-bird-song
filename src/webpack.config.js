
const path = require('path');      //<- сохраняем в константу path путь к проекту

module.exports = {
  entry: "./src/index.js",    //<- откуда webpack будет брать данные для сборки
  output: {
    filename: "bandle.js",    //<- где будет происходить сборка проекта
    path: path.resolve(__dirname, "dist")   //<- в какой папке будет происходить сохранение "bandle.js"
  }
}