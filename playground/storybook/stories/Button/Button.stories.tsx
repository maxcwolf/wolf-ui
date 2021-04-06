import React from 'react'
import { Text } from 'react-native'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import Button from '.'
// import { Device } from '../../../components/Device/Device'

/**
 * @todo
 *  - Only render <Device> if web
 *  - Actions being used here are using crypto, which isnt available on RN
 *  - Implement actions with mobile frienddly version
 */
storiesOf('Button', module)
  // .addDecorator((getStory) => <Device>{getStory()}</Device>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      {text('Button text', 'Hello Button')}
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ))
