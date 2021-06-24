import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { boolean, text, select } from '@storybook/addon-knobs'
import { Box, Button } from '@maxcwolf/ui-react-native'
import { colorSelect } from '../../knobs/select'

export default {
  title: 'Button.Inner',
}

export const Default = () => (
  <Button.Inner
    color={colorSelect('color', 'primary')}
    loading={boolean('loading', false)}
    type={select('type', ['contained', 'outlined'], 'contained')}
  >
    {text('children', 'Inner')}
  </Button.Inner>
)

export const Outlined = () => (
  <Button.Inner color={colorSelect('color', 'primary')} loading={false} type="outlined">
    Inner
  </Button.Inner>
)

export const Loading = () => (
  <Button.Inner color={colorSelect('color', 'primary')} loading={true} type="outlined">
    Inner
  </Button.Inner>
)

storiesOf('Button.Inner', module)
  .addDecorator(story => (
    <Box flexDirection="row" justifyContent="center">
      {story()}
    </Box>
  ))
  .add('Default', () => <Default />)
  .add('Outlined', () => <Outlined />)
  .add('Loading', () => <Loading />)
