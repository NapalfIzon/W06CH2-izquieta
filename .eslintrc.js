module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "consistent-return": "off",
    "no-debugger": "off",
    "lines-between-class-members": "off",
    "class-methods-use-this": "off",
    "import/extensions": "off",
  },
};
