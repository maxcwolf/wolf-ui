// Used by Jest only; `bob build` brings its own Babel setup.
module.exports = {
  presets: [['module:react-native-builder-bob/babel-preset', { modules: 'commonjs' }]],
};
