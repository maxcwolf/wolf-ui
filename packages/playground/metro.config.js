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
 * https://github.com/facebook/react/issues/13991#issuecomment-830308729
 */
const Resolver = require('metro-resolver')
const getWorkspaces = require('get-yarn-workspaces')
const path = require('path')
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
    watchFolders,
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      // This was added to enable Metro to handle the symlinks that yarn
      // workspaces places in the node_modules folder.
      extraNodeModules: new Proxy(
        {},
        {
          get: (target, name) => {
            return path.join(__dirname, `node_modules/${name}`)
          },
        },
      ),
      // Make sure we use the local copy of react and react-native
      resolveRequest: (context, realModuleName, platform, moduleName) => {
        const clearContext = { ...context, resolveRequest: undefined }
        const module =
          moduleName === 'react' || moduleName === 'react-native'
            ? path.join(__dirname, 'node_modules', realModuleName)
            : realModuleName
        return Resolver.resolve(clearContext, module, platform)
      },
    },
  }

  return applyConfigForLinkedDependencies(projectConfig, {
    projectRoot: __dirname,
    blacklistLinkedModules: ['react-native', 'react'],
  })
}

module.exports = getConfig(__dirname)
