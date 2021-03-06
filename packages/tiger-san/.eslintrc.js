module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  settings: {
    react: {
      version: '16.11.0'
    }
  },
  extends: ['standard', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react']
}
