module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'import/no-extraneous-dependencies': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
  },
};
