module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-expressions': 'off',
    'react/jsx-filename-extension': 'off',
    'no-alert': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
  },
};
