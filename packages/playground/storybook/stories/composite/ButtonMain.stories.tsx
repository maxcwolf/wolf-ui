import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { boolean, text, select } from '@storybook/addon-knobs'
import { Box, Button } from '@maxcwolf/ui-react-native'
import { colorSelect } from '../../knobs/select'

export default {
  title: 'Button.Main',
}

export const Default = () => (
  <Button.Main
    color={colorSelect('color', 'primary')}
    icon={boolean('icon', true)}
    loading={boolean('loading', false)}
    type={select('type', ['contained', 'outlined'], 'contained')}
  >
    {text('children', 'PRIMARY')}
  </Button.Main>
)

export const Outlined = () => (
  <Button.Main color={colorSelect('color', 'primary')} loading={false} type="outlined">
    PRIMARY
  </Button.Main>
)

export const Loading = () => (
  <Button.Main color={colorSelect('color', 'primary')} loading={true} type="outlined">
    PRIMARY
  </Button.Main>
)

export const NoIcon = () => (
  <Button.Main
    color={colorSelect('color', 'primary')}
    icon={false}
    loading={false}
    type="contained"
  >
    PRIMARY
  </Button.Main>
)

storiesOf('Button.Main', module)
  .addDecorator(story => (
    <Box flexDirection="row" justifyContent="center">
      {story()}
    </Box>
  ))
  .add('Default', () => <Default />)
  .add('Outlined', () => <Outlined />)
  .add('Loading', () => <Loading />)
  .add('No Icon', () => <NoIcon />)
