import React from 'react'
import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { Box, Text } from '@maxcwolf/ui-react-native'
import { colorSelect, spacingSelect } from '../../knobs/select'

export default {
  title: 'Box',
}

export const Default = () => (
  <Box
    bg={colorSelect('bg', 'primary')}
    borderColor={colorSelect('borderColor', 'inputBorder')}
    borderWidth={1}
    height={number('height', 100)}
    m={spacingSelect('m', 'l')}
    p={spacingSelect('p', 's')}
    width={number('width', 100)}
  />
)

export const WithText = () => (
  <Box
    alignItems="center"
    bg={colorSelect('bg', 'white')}
    borderColor="inputBorder"
    borderWidth={1}
    height={100}
    justifyContent="center"
    m={'l'}
    width={100}
  >
    <Text color={colorSelect('color', 'text')}>Text in a Box</Text>
  </Box>
)

storiesOf('Box', module)
  .add('Default', () => <Default />)
  .add('with Text', () => <WithText />)
