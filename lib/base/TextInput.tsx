import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native'
import {
  createRestyleComponent,
  color,
  opacity,
  visible,
  typography,
  textShadow,
  spacing,
  TextProps,
} from '@shopify/restyle'
import { Theme } from '../../theme/default'

const restyleFunctions = [
  color,
  opacity,
  visible,
  typography,
  textShadow,
  spacing,
]

export type TextInputProps = TextProps<Theme> & RNTextInputProps

export const TextInput = createRestyleComponent<TextInputProps, Theme>(
  restyleFunctions,
  RNTextInput,
)
