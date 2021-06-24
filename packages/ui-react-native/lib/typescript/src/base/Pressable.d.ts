import { FC, ReactNode } from 'react'
import { PressableProps as RNPressableProps, StyleProp, ViewStyle } from 'react-native'
import { GeneralRestyleProps } from '../helpers/restyleFunctions'
import { Theme } from '../theme'
export interface PressableProps
  extends Partial<Omit<GeneralRestyleProps<Theme>, 'children' | 'style'>>,
    GeneralRestyleProps<Theme>,
    RNPressableProps {
  children?: ReactNode
  style?: StyleProp<ViewStyle>
}
export declare const Pressable: FC<GeneralRestyleProps<Theme>>
