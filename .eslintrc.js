module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended'
  ],
  overrides: [
    {
      files: ['.eslintrc.js'],
      env: {
        node: true
      }
    }
  ]
}
