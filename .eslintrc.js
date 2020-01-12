module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: [
    'standard',
    'standard-react'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  rules: {
    "react/jsx-indent": ["error", 2],
    "comma-dangle": ["error", "always-multiline"],
    "no-unused-vars": "warn"
  }
}
