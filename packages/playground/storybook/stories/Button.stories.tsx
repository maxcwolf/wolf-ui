import React from 'react'
import { Text } from 'react-native'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import Button from '../../components/Button'

export default {
  title: 'Button',
}

export const WithText = () => (
  <Button onPress={action('clicked-text')}>
    {text('Button text', 'Hello Button')}
  </Button>
)

export const WithEmoji = () => (
  <Button onPress={action('clicked-emoji')}>
    <Text>😀 😎 👍 💯</Text>
  </Button>
)

storiesOf('Button', module)
  .add('with text', () => <WithText />)
  .add('with some emoji', () => <WithEmoji />)
