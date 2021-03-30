import { AppRegistry } from 'react-native'
import App from './App'
import { default as appConfig } from './app.json'

const appName = appConfig.name

AppRegistry.registerComponent(appName, () => App)
