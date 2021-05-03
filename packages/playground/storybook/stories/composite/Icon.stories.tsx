import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Icon } from '@wolf-ui/components'
import { colorSelect, iconTypeSelect } from '../../knobs/select'

export default {
  title: 'Icon',
}

export const Default = () => (
  <Icon
    type={iconTypeSelect('type', 'entypo')}
    name={'eye'}
    color={colorSelect('color', 'primary')}
  />
)

export const PasswordInput = () => (
  <Icon type="entypo" name={'eye'} color={colorSelect('color', 'primary')} />
)

storiesOf('Icon', module)
  .add('Default', () => <Default />)
  .add('PasswordI nput', () => <PasswordInput />)
