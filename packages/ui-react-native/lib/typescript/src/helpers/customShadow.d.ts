/**
 * @description Custom Shadow Restyle Functions which adds theme access for `shadowRadius`
 * @see https://github.com/Shopify/restyle#custom-restyle-functions
 */
import { ViewStyle } from 'react-native'
import { BaseTheme, ResponsiveValue } from '@shopify/restyle'
export declare const customShadowFunctions: (
  | {
      property: 'elevation' | 'shadowOffset' | 'shadowOpacity'
      themeKey: undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }
  | {
      property: 'shadowColor'
      themeKey: 'colors' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }
  | {
      property: 'shadowRadius'
      themeKey: 'borderRadii' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }
)[]
export declare type CustomShadowProps<TTheme extends BaseTheme> = {
  shadowOpacity?: ResponsiveValue<keyof TTheme['opacity'], TTheme>
  shadowRadius?: ResponsiveValue<
    TTheme['borderRadii'] extends {} ? keyof TTheme['borderRadii'] : number,
    TTheme
  >
  elevation?: ResponsiveValue<ViewStyle['elevation'], TTheme>
  shadowOffset?: ResponsiveValue<ViewStyle['shadowOffset'], TTheme>
  shadowColor?: ResponsiveValue<keyof TTheme['colors'], TTheme>
}
