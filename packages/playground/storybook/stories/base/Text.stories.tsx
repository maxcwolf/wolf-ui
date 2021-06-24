import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'
import { Text } from '@maxcwolf/ui-react-native'
import { colorSelect, textVariantSelect } from '../../knobs/select'

export default {
  title: 'Text',
}

export const Default = () => (
  <Text color={colorSelect('color', 'text')}>{text('text', 'This is a text')}</Text>
)

export const Variants = () => <Text variant={textVariantSelect('body')}>Text Variants</Text>

storiesOf('Text', module)
  .add('Default', () => <Default />)
  .add('Variants', () => <Variants />)
