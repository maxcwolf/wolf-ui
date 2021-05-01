/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 *
 * References:
 *
 * https://github.com/Carimus/metro-symlinked-deps
 * https://medium.com/@huntie/a-concise-guide-to-configuring-react-native-with-yarn-workspaces-d7efa71b6906
 */

const path = require('path')
const fs = require('fs')
const blacklist = require('metro-config/src/defaults/blacklist')
const escape = require('escape-string-regexp')
const getWorkspaces = require('get-yarn-workspaces')

const root = path.resolve(__dirname, '..')
const package = JSON.parse(
  fs.readFileSync(path.join(root, 'package.json'), 'utf8'),
)

const modules = [
  '@babel/runtime',
  ...Object.keys({
    ...package.dependencies,
    ...package.peerDependencies,
  }),
]
const {
  applyConfigForLinkedDependencies,
} = require('@carimus/metro-symlinked-deps')

function getConfig(appDir) {
  const workspaces = getWorkspaces(appDir)

  const watchFolders = [
    path.resolve(appDir, '../..', 'node_modules'),
    ...workspaces.filter((workspaceDir) => !(workspaceDir === appDir)),
  ]

  const projectConfig = {
    projectRoot: __dirname,
    watchFolders: [root],

    resolver: {
      blacklistRE: blacklist([
        new RegExp(`^${escape(path.join(root, 'node_modules'))}\\/.*$`),
      ]),

      extraNodeModules: modules.reduce((acc, name) => {
        acc[name] = path.join(__dirname, 'node_modules', name)
        return acc
      }, {}),
    },

    watchFolders,
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    // resolver: {
    //   // Resolve these module imports to the locally-installed version
    //   extraNodeModules: {
    //     react: path.resolve(appDir, 'node_modules', 'react'),
    //     'react-native': path.resolve(appDir, 'node_modules', 'react-native'),
    //     'core-js': path.resolve(appDir, 'node_modules', 'core-js'),
    //   },
    // },
  }

  return applyConfigForLinkedDependencies(projectConfig, {
    projectRoot: __dirname,
    blacklistLinkedModules: ['react-native', 'react'],
  })
}

module.exports = getConfig(__dirname)
