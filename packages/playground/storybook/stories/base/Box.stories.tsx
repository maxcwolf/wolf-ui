import React from 'react'
import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { Box, Text } from '@wolf-ui/components'
import { colorSelect, spacingSelect } from '../../knobs/select'

export default {
  title: 'Box',
}

export const Default = () => (
  <Box
    bg={colorSelect('bg', 'primary')}
    m={spacingSelect('m', 'l')}
    p={spacingSelect('p', 's')}
    width={number('width', 100)}
    height={number('height', 100)}
    borderWidth={1}
    borderColor={colorSelect('borderColor', 'inputBorder')}
  />
)

export const WithText = () => (
  <Box
    bg={colorSelect('bg', 'white')}
    m={'l'}
    borderWidth={1}
    borderColor="inputBorder"
    width={100}
    height={100}
    justifyContent="center"
    alignItems="center"
  >
    <Text color={colorSelect('color', 'text')}>Text in a Box</Text>
  </Box>
)

storiesOf('Box', module)
  .add('Default', () => <Default />)
  .add('with Text', () => <WithText />)
