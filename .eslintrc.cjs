module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    linebreak_style: ["error", "unix"],
    arrow_spacing: ["error", { before: true, after: true }],
    no_trailing_spaces: ["error"],
    object_curly_spacing: ["error", "always"],
  },
};
