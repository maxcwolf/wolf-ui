import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { InputText } from '@maxcwolf/ui-react-native'

export default {
  title: 'InputText',
}

export const Default = () => <InputText label="Label" />

export const IsPassword = () => <InputText isPassword label="Password" />

export const NoLabel = () => <InputText />

storiesOf('InputText', module)
  .add('Default', () => <Default />)
  .add('IsPassword', () => <IsPassword />)
  .add('NoLabel', () => <NoLabel />)
