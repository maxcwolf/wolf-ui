import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'
import { Text } from '@wolf-ui/components'
import { colorSelect } from '../../knobs/select'

export default {
  title: 'Text',
}

export const Default = () => (
  <Text color={colorSelect('text')}>{text('text', 'This is a text')}</Text>
)

storiesOf('Text', module).add('Default', () => <Default />)
