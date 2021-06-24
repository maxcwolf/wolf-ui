import {
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  OpacityProps,
  VisibleProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps,
  BorderProps,
  PositionProps,
  ColorProps,
  TypographyProps,
  TextShadowProps,
  BaseTheme,
} from '@shopify/restyle'
import { CustomShadowProps } from './customShadow'
export declare const generalRestyleFunctions: (
  | {
      property:
        | 'width'
        | 'height'
        | 'minWidth'
        | 'maxWidth'
        | 'minHeight'
        | 'maxHeight'
        | 'overflow'
        | 'aspectRatio'
        | 'alignContent'
        | 'alignItems'
        | 'alignSelf'
        | 'justifyContent'
        | 'flex'
        | 'flexBasis'
        | 'flexDirection'
        | 'flexGrow'
        | 'flexShrink'
        | 'flexWrap'
      themeKey: undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }[]
  | (
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
  | {
      property: 'backgroundColor'
      themeKey: 'colors' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }
  | {
      property: 'opacity'
      themeKey: undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }
  | {
      property: 'visible'
      themeKey: undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        'display' | 'visible'
      >
    }
  | {
      property:
        | 'margin'
        | 'marginBottom'
        | 'marginEnd'
        | 'marginHorizontal'
        | 'marginLeft'
        | 'marginRight'
        | 'marginStart'
        | 'marginTop'
        | 'marginVertical'
        | 'padding'
        | 'paddingBottom'
        | 'paddingEnd'
        | 'paddingHorizontal'
        | 'paddingLeft'
        | 'paddingRight'
        | 'paddingStart'
        | 'paddingTop'
        | 'paddingVertical'
      themeKey: 'spacing' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }[]
  | (
      | {
          property:
            | 'borderBottomWidth'
            | 'borderLeftWidth'
            | 'borderRightWidth'
            | 'borderStyle'
            | 'borderTopWidth'
            | 'borderWidth'
            | 'borderEndWidth'
            | 'borderStartWidth'
          themeKey: undefined
          variant: boolean
          func: import('@shopify/restyle').RestyleFunction<
            Record<string, any>,
            BaseTheme,
            import('@shopify/restyle').RNStyleProperty
          >
        }
      | {
          property:
            | 'borderBottomColor'
            | 'borderColor'
            | 'borderEndColor'
            | 'borderLeftColor'
            | 'borderRightColor'
            | 'borderStartColor'
            | 'borderTopColor'
          themeKey: 'colors' | undefined
          variant: boolean
          func: import('@shopify/restyle').RestyleFunction<
            Record<string, any>,
            BaseTheme,
            import('@shopify/restyle').RNStyleProperty
          >
        }
      | {
          property:
            | 'borderBottomEndRadius'
            | 'borderBottomLeftRadius'
            | 'borderBottomRightRadius'
            | 'borderBottomStartRadius'
            | 'borderRadius'
            | 'borderTopEndRadius'
            | 'borderTopLeftRadius'
            | 'borderTopRightRadius'
            | 'borderTopStartRadius'
          themeKey: 'borderRadii' | undefined
          variant: boolean
          func: import('@shopify/restyle').RestyleFunction<
            Record<string, any>,
            BaseTheme,
            import('@shopify/restyle').RNStyleProperty
          >
        }
    )[]
  | (
      | {
          property: 'bottom' | 'end' | 'left' | 'position' | 'right' | 'start' | 'top'
          themeKey: undefined
          variant: boolean
          func: import('@shopify/restyle').RestyleFunction<
            Record<string, any>,
            BaseTheme,
            import('@shopify/restyle').RNStyleProperty
          >
        }
      | {
          property: 'zIndex'
          themeKey: 'zIndices' | undefined
          variant: boolean
          func: import('@shopify/restyle').RestyleFunction<
            Record<string, any>,
            BaseTheme,
            import('@shopify/restyle').RNStyleProperty
          >
        }
    )[]
  | {
      property: 'bg'
      themeKey: 'colors' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        'backgroundColor' | 'bg'
      >
    }
  | {
      property:
        | 'p'
        | 'm'
        | 'mt'
        | 'mr'
        | 'mb'
        | 'ml'
        | 'mx'
        | 'my'
        | 'ms'
        | 'me'
        | 'pt'
        | 'pr'
        | 'pb'
        | 'pl'
        | 'px'
        | 'py'
        | 'ps'
        | 'pe'
      themeKey: 'spacing' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        | 'p'
        | 'color'
        | 'testID'
        | 'width'
        | 'height'
        | 'minWidth'
        | 'maxWidth'
        | 'minHeight'
        | 'maxHeight'
        | 'overflow'
        | 'aspectRatio'
        | 'alignContent'
        | 'alignItems'
        | 'alignSelf'
        | 'justifyContent'
        | 'flex'
        | 'flexBasis'
        | 'flexDirection'
        | 'flexGrow'
        | 'flexShrink'
        | 'flexWrap'
        | 'backfaceVisibility'
        | 'backgroundColor'
        | 'borderBottomColor'
        | 'borderBottomEndRadius'
        | 'borderBottomLeftRadius'
        | 'borderBottomRightRadius'
        | 'borderBottomStartRadius'
        | 'borderBottomWidth'
        | 'borderColor'
        | 'borderEndColor'
        | 'borderLeftColor'
        | 'borderLeftWidth'
        | 'borderRadius'
        | 'borderRightColor'
        | 'borderRightWidth'
        | 'borderStartColor'
        | 'borderStyle'
        | 'borderTopColor'
        | 'borderTopEndRadius'
        | 'borderTopLeftRadius'
        | 'borderTopRightRadius'
        | 'borderTopStartRadius'
        | 'borderTopWidth'
        | 'borderWidth'
        | 'opacity'
        | 'elevation'
        | 'borderEndWidth'
        | 'borderStartWidth'
        | 'bottom'
        | 'display'
        | 'end'
        | 'left'
        | 'margin'
        | 'marginBottom'
        | 'marginEnd'
        | 'marginHorizontal'
        | 'marginLeft'
        | 'marginRight'
        | 'marginStart'
        | 'marginTop'
        | 'marginVertical'
        | 'padding'
        | 'paddingBottom'
        | 'paddingEnd'
        | 'paddingHorizontal'
        | 'paddingLeft'
        | 'paddingRight'
        | 'paddingStart'
        | 'paddingTop'
        | 'paddingVertical'
        | 'position'
        | 'right'
        | 'start'
        | 'top'
        | 'zIndex'
        | 'direction'
        | 'shadowColor'
        | 'shadowOffset'
        | 'shadowOpacity'
        | 'shadowRadius'
        | 'transform'
        | 'transformMatrix'
        | 'rotation'
        | 'scaleX'
        | 'scaleY'
        | 'translateX'
        | 'translateY'
        | 'fontFamily'
        | 'fontSize'
        | 'fontStyle'
        | 'fontWeight'
        | 'letterSpacing'
        | 'lineHeight'
        | 'textAlign'
        | 'textDecorationLine'
        | 'textDecorationStyle'
        | 'textDecorationColor'
        | 'textShadowColor'
        | 'textShadowOffset'
        | 'textShadowRadius'
        | 'textTransform'
        | 'fontVariant'
        | 'writingDirection'
        | 'textAlignVertical'
        | 'includeFontPadding'
        | 'resizeMode'
        | 'overlayColor'
        | 'tintColor'
        | 'm'
        | 'mt'
        | 'mr'
        | 'mb'
        | 'ml'
        | 'mx'
        | 'my'
        | 'ms'
        | 'me'
        | 'pt'
        | 'pr'
        | 'pb'
        | 'pl'
        | 'px'
        | 'py'
        | 'ps'
        | 'pe'
      >
    }[]
  | {
      property: 'color'
      themeKey: 'colors' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }
  | {
      property:
        | 'fontFamily'
        | 'fontSize'
        | 'fontStyle'
        | 'fontWeight'
        | 'letterSpacing'
        | 'lineHeight'
        | 'textAlign'
        | 'textDecorationLine'
        | 'textDecorationStyle'
        | 'textTransform'
      themeKey: undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }[]
)[]
export declare type GeneralRestyleProps<TTheme extends BaseTheme> = BackgroundColorProps<TTheme> &
  BackgroundColorShorthandProps<TTheme> &
  OpacityProps<TTheme> &
  VisibleProps<TTheme> &
  LayoutProps<TTheme> &
  SpacingProps<TTheme> &
  SpacingShorthandProps<TTheme> &
  BorderProps<TTheme> &
  PositionProps<TTheme> &
  ColorProps<TTheme> &
  TypographyProps<TTheme> &
  TextShadowProps<TTheme> &
  CustomShadowProps<TTheme>
export declare const textRestyleFunctions: (
  | {
      property: 'opacity'
      themeKey: undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }
  | {
      property: 'visible'
      themeKey: undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        'display' | 'visible'
      >
    }
  | {
      property:
        | 'margin'
        | 'marginBottom'
        | 'marginEnd'
        | 'marginHorizontal'
        | 'marginLeft'
        | 'marginRight'
        | 'marginStart'
        | 'marginTop'
        | 'marginVertical'
        | 'padding'
        | 'paddingBottom'
        | 'paddingEnd'
        | 'paddingHorizontal'
        | 'paddingLeft'
        | 'paddingRight'
        | 'paddingStart'
        | 'paddingTop'
        | 'paddingVertical'
      themeKey: 'spacing' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }[]
  | {
      property: 'color'
      themeKey: 'colors' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }
  | {
      property:
        | 'fontFamily'
        | 'fontSize'
        | 'fontStyle'
        | 'fontWeight'
        | 'letterSpacing'
        | 'lineHeight'
        | 'textAlign'
        | 'textDecorationLine'
        | 'textDecorationStyle'
        | 'textTransform'
      themeKey: undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }[]
  | (
      | {
          property: 'textShadowOffset' | 'textShadowRadius'
          themeKey: undefined
          variant: boolean
          func: import('@shopify/restyle').RestyleFunction<
            Record<string, any>,
            BaseTheme,
            import('@shopify/restyle').RNStyleProperty
          >
        }
      | {
          property: 'textShadowColor'
          themeKey: 'colors' | undefined
          variant: boolean
          func: import('@shopify/restyle').RestyleFunction<
            Record<string, any>,
            BaseTheme,
            import('@shopify/restyle').RNStyleProperty
          >
        }
    )[]
)[]
export declare const buttonRestyleFunctions: (
  | (
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
  | {
      property: 'backgroundColor'
      themeKey: 'colors' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }
  | {
      property:
        | 'margin'
        | 'marginBottom'
        | 'marginEnd'
        | 'marginHorizontal'
        | 'marginLeft'
        | 'marginRight'
        | 'marginStart'
        | 'marginTop'
        | 'marginVertical'
        | 'padding'
        | 'paddingBottom'
        | 'paddingEnd'
        | 'paddingHorizontal'
        | 'paddingLeft'
        | 'paddingRight'
        | 'paddingStart'
        | 'paddingTop'
        | 'paddingVertical'
      themeKey: 'spacing' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }[]
  | (
      | {
          property:
            | 'borderBottomWidth'
            | 'borderLeftWidth'
            | 'borderRightWidth'
            | 'borderStyle'
            | 'borderTopWidth'
            | 'borderWidth'
            | 'borderEndWidth'
            | 'borderStartWidth'
          themeKey: undefined
          variant: boolean
          func: import('@shopify/restyle').RestyleFunction<
            Record<string, any>,
            BaseTheme,
            import('@shopify/restyle').RNStyleProperty
          >
        }
      | {
          property:
            | 'borderBottomColor'
            | 'borderColor'
            | 'borderEndColor'
            | 'borderLeftColor'
            | 'borderRightColor'
            | 'borderStartColor'
            | 'borderTopColor'
          themeKey: 'colors' | undefined
          variant: boolean
          func: import('@shopify/restyle').RestyleFunction<
            Record<string, any>,
            BaseTheme,
            import('@shopify/restyle').RNStyleProperty
          >
        }
      | {
          property:
            | 'borderBottomEndRadius'
            | 'borderBottomLeftRadius'
            | 'borderBottomRightRadius'
            | 'borderBottomStartRadius'
            | 'borderRadius'
            | 'borderTopEndRadius'
            | 'borderTopLeftRadius'
            | 'borderTopRightRadius'
            | 'borderTopStartRadius'
          themeKey: 'borderRadii' | undefined
          variant: boolean
          func: import('@shopify/restyle').RestyleFunction<
            Record<string, any>,
            BaseTheme,
            import('@shopify/restyle').RNStyleProperty
          >
        }
    )[]
)[]
export declare const cardRestyleFunctions: (
  | {
      property:
        | 'width'
        | 'height'
        | 'minWidth'
        | 'maxWidth'
        | 'minHeight'
        | 'maxHeight'
        | 'overflow'
        | 'aspectRatio'
        | 'alignContent'
        | 'alignItems'
        | 'alignSelf'
        | 'justifyContent'
        | 'flex'
        | 'flexBasis'
        | 'flexDirection'
        | 'flexGrow'
        | 'flexShrink'
        | 'flexWrap'
      themeKey: undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }[]
  | (
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
  | {
      property: 'backgroundColor'
      themeKey: 'colors' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }
  | {
      property:
        | 'margin'
        | 'marginBottom'
        | 'marginEnd'
        | 'marginHorizontal'
        | 'marginLeft'
        | 'marginRight'
        | 'marginStart'
        | 'marginTop'
        | 'marginVertical'
        | 'padding'
        | 'paddingBottom'
        | 'paddingEnd'
        | 'paddingHorizontal'
        | 'paddingLeft'
        | 'paddingRight'
        | 'paddingStart'
        | 'paddingTop'
        | 'paddingVertical'
      themeKey: 'spacing' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        import('@shopify/restyle').RNStyleProperty
      >
    }[]
  | (
      | {
          property:
            | 'borderBottomWidth'
            | 'borderLeftWidth'
            | 'borderRightWidth'
            | 'borderStyle'
            | 'borderTopWidth'
            | 'borderWidth'
            | 'borderEndWidth'
            | 'borderStartWidth'
          themeKey: undefined
          variant: boolean
          func: import('@shopify/restyle').RestyleFunction<
            Record<string, any>,
            BaseTheme,
            import('@shopify/restyle').RNStyleProperty
          >
        }
      | {
          property:
            | 'borderBottomColor'
            | 'borderColor'
            | 'borderEndColor'
            | 'borderLeftColor'
            | 'borderRightColor'
            | 'borderStartColor'
            | 'borderTopColor'
          themeKey: 'colors' | undefined
          variant: boolean
          func: import('@shopify/restyle').RestyleFunction<
            Record<string, any>,
            BaseTheme,
            import('@shopify/restyle').RNStyleProperty
          >
        }
      | {
          property:
            | 'borderBottomEndRadius'
            | 'borderBottomLeftRadius'
            | 'borderBottomRightRadius'
            | 'borderBottomStartRadius'
            | 'borderRadius'
            | 'borderTopEndRadius'
            | 'borderTopLeftRadius'
            | 'borderTopRightRadius'
            | 'borderTopStartRadius'
          themeKey: 'borderRadii' | undefined
          variant: boolean
          func: import('@shopify/restyle').RestyleFunction<
            Record<string, any>,
            BaseTheme,
            import('@shopify/restyle').RNStyleProperty
          >
        }
    )[]
  | {
      property: 'bg'
      themeKey: 'colors' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        'backgroundColor' | 'bg'
      >
    }
  | {
      property:
        | 'p'
        | 'm'
        | 'mt'
        | 'mr'
        | 'mb'
        | 'ml'
        | 'mx'
        | 'my'
        | 'ms'
        | 'me'
        | 'pt'
        | 'pr'
        | 'pb'
        | 'pl'
        | 'px'
        | 'py'
        | 'ps'
        | 'pe'
      themeKey: 'spacing' | undefined
      variant: boolean
      func: import('@shopify/restyle').RestyleFunction<
        Record<string, any>,
        BaseTheme,
        | 'p'
        | 'color'
        | 'testID'
        | 'width'
        | 'height'
        | 'minWidth'
        | 'maxWidth'
        | 'minHeight'
        | 'maxHeight'
        | 'overflow'
        | 'aspectRatio'
        | 'alignContent'
        | 'alignItems'
        | 'alignSelf'
        | 'justifyContent'
        | 'flex'
        | 'flexBasis'
        | 'flexDirection'
        | 'flexGrow'
        | 'flexShrink'
        | 'flexWrap'
        | 'backfaceVisibility'
        | 'backgroundColor'
        | 'borderBottomColor'
        | 'borderBottomEndRadius'
        | 'borderBottomLeftRadius'
        | 'borderBottomRightRadius'
        | 'borderBottomStartRadius'
        | 'borderBottomWidth'
        | 'borderColor'
        | 'borderEndColor'
        | 'borderLeftColor'
        | 'borderLeftWidth'
        | 'borderRadius'
        | 'borderRightColor'
        | 'borderRightWidth'
        | 'borderStartColor'
        | 'borderStyle'
        | 'borderTopColor'
        | 'borderTopEndRadius'
        | 'borderTopLeftRadius'
        | 'borderTopRightRadius'
        | 'borderTopStartRadius'
        | 'borderTopWidth'
        | 'borderWidth'
        | 'opacity'
        | 'elevation'
        | 'borderEndWidth'
        | 'borderStartWidth'
        | 'bottom'
        | 'display'
        | 'end'
        | 'left'
        | 'margin'
        | 'marginBottom'
        | 'marginEnd'
        | 'marginHorizontal'
        | 'marginLeft'
        | 'marginRight'
        | 'marginStart'
        | 'marginTop'
        | 'marginVertical'
        | 'padding'
        | 'paddingBottom'
        | 'paddingEnd'
        | 'paddingHorizontal'
        | 'paddingLeft'
        | 'paddingRight'
        | 'paddingStart'
        | 'paddingTop'
        | 'paddingVertical'
        | 'position'
        | 'right'
        | 'start'
        | 'top'
        | 'zIndex'
        | 'direction'
        | 'shadowColor'
        | 'shadowOffset'
        | 'shadowOpacity'
        | 'shadowRadius'
        | 'transform'
        | 'transformMatrix'
        | 'rotation'
        | 'scaleX'
        | 'scaleY'
        | 'translateX'
        | 'translateY'
        | 'fontFamily'
        | 'fontSize'
        | 'fontStyle'
        | 'fontWeight'
        | 'letterSpacing'
        | 'lineHeight'
        | 'textAlign'
        | 'textDecorationLine'
        | 'textDecorationStyle'
        | 'textDecorationColor'
        | 'textShadowColor'
        | 'textShadowOffset'
        | 'textShadowRadius'
        | 'textTransform'
        | 'fontVariant'
        | 'writingDirection'
        | 'textAlignVertical'
        | 'includeFontPadding'
        | 'resizeMode'
        | 'overlayColor'
        | 'tintColor'
        | 'm'
        | 'mt'
        | 'mr'
        | 'mb'
        | 'ml'
        | 'mx'
        | 'my'
        | 'ms'
        | 'me'
        | 'pt'
        | 'pr'
        | 'pb'
        | 'pl'
        | 'px'
        | 'py'
        | 'ps'
        | 'pe'
      >
    }[]
)[]
