module.exports = {
  root: true,
  extends: [
    'plugin:react', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native'],
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    // allow js file extension
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    ],
    // for post defining style object in react-native
    'no-use-before-define': ['error', { variables: false }],
    // react-native rules
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react/display-name': false,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
