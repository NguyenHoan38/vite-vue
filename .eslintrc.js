module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['prettier'],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "prettier/prettier": "error",
    yoda: 'off',
    'nuxt/no-cjs-in-config': 'off',
    'no-console': 'off',
    'no-inner-declarations': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'vue/component-tags-order': 'off',
    'vue/order-in-components': 'off',
    'standard/no-callback-literal': 'off',
    camelcase: 'off',
  },
};
