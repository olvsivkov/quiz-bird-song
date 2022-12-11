/* {
  "parser": "@babel/eslint-parser",
  "plugins": ["only-warn"],
  "extends":  ["airbnb"],
  "requireConfigFile": false,
  "rules": {
  }
} */
module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'linebreak-style': 0,
  },
};
