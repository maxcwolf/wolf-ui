/**
 * @description Custom Shadow Restyle Functions which adds theme access for `shadowRadius`
 * @see https://github.com/Shopify/restyle#custom-restyle-functions
 */
import { ViewStyle } from 'react-native'
import { BaseTheme, createRestyleFunction, ResponsiveValue } from '@shopify/restyle'
import { getKeys } from './keys'

const shadowProperties = {
  shadowOpacity: true,
  shadowOffset: true,
  elevation: true,
}

export const customShadowFunctions = [
  ...getKeys(shadowProperties).map(property =>
    createRestyleFunction({
      property,
    })
  ),
  createRestyleFunction({
    property: 'shadowColor',
    themeKey: 'colors',
  }),
  createRestyleFunction({
    property: 'shadowRadius',
    themeKey: 'borderRadii',
  }),
]

export type CustomShadowProps<TTheme extends BaseTheme> = {
  shadowOpacity?: ResponsiveValue<keyof TTheme['opacity'], TTheme>
  shadowRadius?: ResponsiveValue<
    // eslint-disable-next-line @typescript-eslint/ban-types
    TTheme['borderRadii'] extends {} ? keyof TTheme['borderRadii'] : number,
    TTheme
  >
  elevation?: ResponsiveValue<ViewStyle['elevation'], TTheme>
  shadowOffset?: ResponsiveValue<ViewStyle['shadowOffset'], TTheme>
  shadowColor?: ResponsiveValue<keyof TTheme['colors'], TTheme>
}
