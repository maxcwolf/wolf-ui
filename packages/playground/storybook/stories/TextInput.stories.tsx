import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react-native'
import { TextInput, ThemeProvider } from '@wolf-ui/components'

const Default = () => <TextInput />

storiesOf('TextInput', module)
  // .addDecorator((story) => <ThemeProvider>{story()}</ThemeProvider>)
  .add('Default', () => <Default />)
