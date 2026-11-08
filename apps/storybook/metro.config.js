const path = require('node:path');
const { getDefaultConfig } = require('expo/metro-config');
const { withStorybook } = require('@storybook/react-native/metro/withStorybook');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// Monorepo: watch the workspace packages and resolve from the root node_modules too.
config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];
// Workspace packages export "wolf-ui-source" -> src/index.ts, so Metro bundles the library from
// source and edits hot-reload without a build (ADR 0004). The name is ours alone, so no
// third-party package is resolved differently.
config.resolver.unstable_conditionNames = [
  'wolf-ui-source',
  ...config.resolver.unstable_conditionNames,
];

if (process.env.CI) {
  config.resolver.useWatchman = false;
}

module.exports = withStorybook(config, {
  enabled: true,
  configPath: path.join(projectRoot, '.rnstorybook'),
});
