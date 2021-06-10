module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // 'vue/html-indent': ['warn', 4],
    // indent: ['error', 4],
    'comma-dangle': ['error', 'only-multiline']
  },
}
