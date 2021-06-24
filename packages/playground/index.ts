import { AppRegistry } from 'react-native'
// eslint-disable-next-line import/extensions
import { App } from './App'
import { default as appConfig } from './app.json'

const appName = appConfig.name

AppRegistry.registerComponent(appName, () => App)
