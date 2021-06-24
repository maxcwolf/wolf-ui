import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { boolean, number } from '@storybook/addon-knobs'
import { Icon } from '@maxcwolf/ui-react-native'
import { colorSelect, iconSvgNameSelect, iconTypeSelect } from '../../knobs/select'

export default {
  title: 'Icon',
}

export const Default = () => (
  <Icon
    bg={colorSelect('bg', 'transparent')}
    color={colorSelect('color', 'primary')}
    isRounded={boolean('isRounded', false)}
    name="eye"
    type={iconTypeSelect('entypo')}
  />
)

export const Svg = () => (
  <Icon
    bg={colorSelect('bg', 'white')}
    color={colorSelect('color', 'black')}
    name={iconSvgNameSelect('add')}
    size={number('size', 50)}
    type={iconTypeSelect('svg')} // TODO: Add sizing to theme
  />
)

export const Touchable = () => (
  <Icon
    color={colorSelect('color', 'primary')}
    name={'eye'}
    type={iconTypeSelect('entypo')}
    onPress={action('Icon pressed')}
  />
)

export const Rounded = () => (
  <Icon
    bg={colorSelect('bg', 'primary')}
    color={colorSelect('color', 'white')}
    isRounded={boolean('isRounded', true)}
    name={'eye'}
    type={iconTypeSelect('entypo')}
  />
)

export const Disabled = () => (
  <Icon
    bg={colorSelect('bg', 'transparent')}
    color={colorSelect('color', 'text')}
    isDisabled={boolean('isDisabled', true)}
    isRounded={boolean('isRounded', false)}
    name={'eye'}
    type={iconTypeSelect('entypo')}
  />
)

export const PasswordInput = () => (
  <Icon color={colorSelect('color', 'primary')} name={'eye'} type="entypo" />
)

storiesOf('Icon', module)
  .add('Default', () => <Default />)
  .add('Svg', () => <Svg />)
  .add('Touchable', () => <Touchable />)
  .add('Rounded', () => <Rounded />)
  .add('Disabled', () => <Disabled />)
  .add('Password Input', () => <PasswordInput />)
