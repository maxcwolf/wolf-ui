import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { ActivityIndicator } from '@wolf-ui/components'
import { colorSelect } from '../../knobs/select'

export default {
  title: 'ActivityIndicator',
}

export const Default = () => (
  <ActivityIndicator color={colorSelect('color', 'primary')} />
)

export const Large = () => (
  <ActivityIndicator color={colorSelect('color', 'primary')} size="large" />
)

storiesOf('ActivityIndicator', module)
  .add('Default', () => <Default />)
  .add('Large', () => <Large />)
