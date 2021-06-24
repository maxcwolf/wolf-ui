import { FC, ReactNode } from 'react'
import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native'
import { BoxProps } from './Box'
export interface TouchableOpacityProps
  extends Partial<Omit<BoxProps, 'children'>>,
    RNTouchableOpacityProps {
  children: ReactNode
}
export declare const TouchableOpacity: FC<TouchableOpacityProps>
