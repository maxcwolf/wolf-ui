import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react-native'
import { Text, ThemeProvider } from '@wolf-ui/components'

const Default = () => <Text color="warn">This is a text</Text>

storiesOf('Text', module)
  // .addDecorator((story) => <ThemeProvider>{story()}</ThemeProvider>)
  .add('Default', () => <Default />)
