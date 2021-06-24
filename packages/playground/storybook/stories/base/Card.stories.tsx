import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Box, Card, Text, Spacer, Icon } from '@maxcwolf/ui-react-native'
import { cardVariantSelect } from '../../knobs/select'

export default {
  title: 'Card',
}

export const Variants = () => {
  const variant = cardVariantSelect('square')
  return (
    <Card flexDirection="row" justifyContent="center" variant={variant}>
      <Text>Variant: '{variant}'</Text>
    </Card>
  )
}

export const ListItem = () => (
  <Card flexDirection="row" variant="listItem">
    <Box flex={0.1} />
    {/* Left stack */}
    <Box flex={3}>
      <Box flex={1} flexDirection="column" justifyContent="space-around">
        <Spacer size="m" />
        <Text variant="cardTitle">Daikon</Text>
        <Text variant="body">DX13</Text>
        <Text variant="cardBody">1901234567</Text>
        <Spacer size="m" />
      </Box>
    </Box>
    {/* Right stack */}
    <Box flex={1}>
      <Box flex={1} flexDirection="column" justifyContent="center">
        {/* Icon row */}
        <Box flexDirection="row" justifyContent="center">
          <Icon name="wrench" />
          <Icon name="wrench" />
        </Box>
        <Spacer size="l" />
        {/* date column */}
        <Text variant="cardBodyItalic">05/10/2021</Text>
      </Box>
    </Box>
  </Card>
)

export const Square = () => (
  <Card alignItems="center" justifyContent="center" variant="square">
    <Box flex={4}>
      <Icon name="wrench" size={80} />
    </Box>
    <Box flex={1}>
      <Text variant="cardBody">Wrench</Text>
    </Box>
  </Card>
)

storiesOf('Card', module)
  .addDecorator(story => (
    <Box flexDirection="row" justifyContent="center">
      {story()}
    </Box>
  ))
  .add('Variants', () => <Variants />)
  .add('ListItem', () => <ListItem />)
  .add('Square', () => <Square />)
