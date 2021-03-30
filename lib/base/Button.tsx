import { ReactNode } from 'react'
import { TouchableOpacity, View } from 'react-native'
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
} from '@shopify/restyle'

import { Text } from './Text'
import { Theme } from '../../theme/default'

const restyleFunctions = [spacing, border, backgroundColor]
type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    onPress: () => void
    children: ReactNode
  }

export const Button = ({ onPress, children, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest)

  return (
    <TouchableOpacity onPress={onPress}>
      <View {...props}>
        <Text>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}
