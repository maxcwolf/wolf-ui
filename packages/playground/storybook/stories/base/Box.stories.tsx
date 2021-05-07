import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Box, Text } from '@wolf-ui/components'
import { colorSelect } from '../../knobs/select'

export default {
  title: 'Box',
}

export const Default = () => (
  <Box bg={colorSelect('bg', 'primary')} m={'l'} width={100} height={100} />
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
