import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from 'react-native'
import { createRestyleComponent, TextProps } from '@shopify/restyle'
import { Theme } from '../theme'
import { textRestyleFunctions } from '../helpers/restyleFunctions'

export type TextInputProps = TextProps<Theme> & RNTextInputProps

export const TextInput = createRestyleComponent<TextInputProps, Theme>(
  textRestyleFunctions,
  RNTextInput
)
