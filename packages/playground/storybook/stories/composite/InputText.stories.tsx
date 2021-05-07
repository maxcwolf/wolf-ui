import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { InputText } from '@wolf-ui/components'

export default {
  title: 'InputText',
}

export const Default = () => <InputText label="Label" />

export const IsPassword = () => <InputText label="Password" isPassword />

export const NoLabel = () => <InputText />

storiesOf('InputText', module)
  .add('Default', () => <Default />)
  .add('IsPassword', () => <IsPassword />)
  .add('NoLabel', () => <NoLabel />)
