import { AppRegistry } from 'react-native'
import React from 'react'

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider, themeDxm } from '@maxcwolf/ui-react-native'
import { loadStories } from './load-stories'

import './rn-addons'

// allows theme value access for all stories
addDecorator((storyFn: any) => <ThemeProvider theme={themeDxm}>{storyFn()}</ThemeProvider>)
// enables knobs for all stories
addDecorator(withKnobs)

// import stories
configure(() => {
  loadStories()
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUi = getStorybookUI({
  asyncStorage: null,
  initialSelection: {
    kind: 'Welcome',
    story: 'to Storybook',
  },
  port: 6006,
})

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUi)

export { StorybookUi }
