import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'
import { Icon } from '@wolf-ui/components'
import { colorSelect, iconTypeSelect } from '../../knobs/select'

export default {
  title: 'Icon',
}

export const Default = () => (
  <Icon
    type={iconTypeSelect('type', 'entypo')}
    bg={colorSelect('bg', 'transparent')}
    name={text('name', 'eye')}
    color={colorSelect('color', 'primary')}
    isRounded={boolean('isRounded', false)}
  />
)

export const Touchable = () => (
  <Icon
    onPress={action('Icon pressed')}
    type={iconTypeSelect('type', 'entypo')}
    name={'eye'}
    color={colorSelect('color', 'primary')}
  />
)

export const Rounded = () => (
  <Icon
    isRounded={boolean('isRounded', true)}
    bg={colorSelect('bg', 'primary')}
    type={iconTypeSelect('type', 'entypo')}
    name={'eye'}
    color={colorSelect('color', 'white')}
  />
)

export const Disabled = () => (
  <Icon
    isDisabled={boolean('isDisabled', true)}
    isRounded={boolean('isRounded', false)}
    bg={colorSelect('bg', 'transparent')}
    type={iconTypeSelect('type', 'entypo')}
    name={'eye'}
    color={colorSelect('color', 'text')}
  />
)

export const PasswordInput = () => (
  <Icon type="entypo" name={'eye'} color={colorSelect('color', 'primary')} />
)

storiesOf('Icon', module)
  .add('Default', () => <Default />)
  .add('Touchable', () => <Touchable />)
  .add('Rounded', () => <Rounded />)
  .add('Disabled', () => <Disabled />)
  .add('Password Input', () => <PasswordInput />)
