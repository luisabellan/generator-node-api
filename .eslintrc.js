module.exports = {
  env: {
    node: true,
    commonjs: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11,
  },
  ignorePatterns: ["**/templates/**"],
  plugins: ['prettier'],
  rules: {
    "semi": "error",
    "prettier/prettier": "error",
  },
  overrides: [
    {
      excludedFiles: '**/templates/**',
    },
  ],
};
