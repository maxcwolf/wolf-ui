/// <reference types="react" />
import { TextInputProps as RNTextInputProps } from 'react-native'
import { TextProps } from '@shopify/restyle'
import { Theme } from '../theme'
export declare type TextInputProps = TextProps<Theme> & RNTextInputProps
export declare const TextInput: import('react').ForwardRefExoticComponent<
  import('@shopify/restyle').ColorProps<{
    colors: {
      transparent: string
      success: string
      successMuted: string
      error: string
      link: string
      white: string
      black: string
      primary: string
      primaryMuted: string
      secondary: string
      text: string
      textMuted: string
      textMutedLight: string
      inputRequired: string
      inputBorder: string
      inputPlaceholder: string
      boxShadow: string
    }
    spacing: {
      xxs: number
      xs: number
      s: number
      m: number
      l: number
      xl: number
      xxl: number
    }
    breakpoints: {
      phone: number
      longPhone: {
        width: number
        height: number
      }
      tablet: number
      largeTablet: number
    }
    borderRadii: {
      corner: number
      icon: number
      base: number
      tag: number
      shadow: number
      cardListItem: number
      buttonMain: number
      buttonInner: number
    }
    textVariants: {
      heading: {
        fontFamily: string
        fontWeight: string
        fontSize: number
        lineHeight: number
        color: string
      }
      subheading: {
        fontFamily: string
        fontWeight: string
        fontSize: number
        lineHeight: number
        color: string
      }
      body: {
        fontFamily: string
        fontWeight: string
        fontSize: number
        lineHeight: number
        color: string
      }
      bodyLink: {
        fontFamily: string
        fontWeight: string
        fontSize: number
        lineHeight: number
        color: string
      }
      bodyError: {
        fontFamily: string
        fontWeight: string
        fontSize: number
        lineHeight: number
        color: string
      }
      cardTitle: {
        fontFamily: string
        fontWeight: string
        fontSize: number
        lineHeight: number
        color: string
      }
      cardBody: {
        fontFamily: string
        fontWeight: string
        fontSize: number
        lineHeight: number
        color: string
      }
      cardBodyItalic: {
        fontFamily: string
        fontWeight: string
        fontStyle: string
        fontSize: number
        lineHeight: number
        color: string
      }
      formLabel: {
        fontFamily: string
        fontWeight: string
        fontSize: number
        lineHeight: number
        color: string
      }
      formValue: {
        fontFamily: string
        fontWeight: string
        fontSize: number
        lineHeight: number
        color: string
      }
      formPlaceholder: {
        fontFamily: string
        fontWeight: string
        fontSize: number
        lineHeight: number
        color: string
      }
      buttonTextMain: {
        fontFamily: string
        fontWeight: string
        fontSize: number
        lineHeight: number
        color: string
      }
      buttonTextInner: {
        fontFamily: string
        fontWeight: string
        fontSize: number
        lineHeight: number
        color: string
      }
    }
    cardVariants: {
      square: {
        borderRadius: string
        shadowColor: string
        shadowOffset: {
          width: number
          height: number
        }
        bg: string
        width: number
        height: number
        shadowOpacity: number
        shadowRadius: number
      }
      listItem: {
        borderRadius: string
        shadowColor: string
        shadowOffset: {
          width: number
          height: number
        }
        bg: string
        width: number
        height: number
        shadowOpacity: number
        shadowRadius: number
      }
      stack: {
        bg: string
        shadowOpacity: number
        width: number
        shadowRadius: number
      }
    }
    buttonVariants: {
      main: {
        borderRadius: string
        height: number
        width: number
        shadowColor: string
        shadowOffset: {
          width: number
          height: number
        }
        shadowOpacity: number
        shadowRadius: number
      }
      inner: {
        borderRadius: string
        borderWidth: number
        height: number
        paddingHorizontal: string
        paddingVertical: string
      }
    }
    zIndices: {
      low: number
      tall: number
    }
  }> &
    import('@shopify/restyle').OpacityProps<{
      colors: {
        transparent: string
        success: string
        successMuted: string
        error: string
        link: string
        white: string
        black: string
        primary: string
        primaryMuted: string
        secondary: string
        text: string
        textMuted: string
        textMutedLight: string
        inputRequired: string
        inputBorder: string
        inputPlaceholder: string
        boxShadow: string
      }
      spacing: {
        xxs: number
        xs: number
        s: number
        m: number
        l: number
        xl: number
        xxl: number
      }
      breakpoints: {
        phone: number
        longPhone: {
          width: number
          height: number
        }
        tablet: number
        largeTablet: number
      }
      borderRadii: {
        corner: number
        icon: number
        base: number
        tag: number
        shadow: number
        cardListItem: number
        buttonMain: number
        buttonInner: number
      }
      textVariants: {
        heading: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        subheading: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        body: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        bodyLink: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        bodyError: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardTitle: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardBody: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardBodyItalic: {
          fontFamily: string
          fontWeight: string
          fontStyle: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formLabel: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formValue: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formPlaceholder: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        buttonTextMain: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        buttonTextInner: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
      }
      cardVariants: {
        square: {
          borderRadius: string
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          bg: string
          width: number
          height: number
          shadowOpacity: number
          shadowRadius: number
        }
        listItem: {
          borderRadius: string
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          bg: string
          width: number
          height: number
          shadowOpacity: number
          shadowRadius: number
        }
        stack: {
          bg: string
          shadowOpacity: number
          width: number
          shadowRadius: number
        }
      }
      buttonVariants: {
        main: {
          borderRadius: string
          height: number
          width: number
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          shadowOpacity: number
          shadowRadius: number
        }
        inner: {
          borderRadius: string
          borderWidth: number
          height: number
          paddingHorizontal: string
          paddingVertical: string
        }
      }
      zIndices: {
        low: number
        tall: number
      }
    }> &
    import('@shopify/restyle').VisibleProps<{
      colors: {
        transparent: string
        success: string
        successMuted: string
        error: string
        link: string
        white: string
        black: string
        primary: string
        primaryMuted: string
        secondary: string
        text: string
        textMuted: string
        textMutedLight: string
        inputRequired: string
        inputBorder: string
        inputPlaceholder: string
        boxShadow: string
      }
      spacing: {
        xxs: number
        xs: number
        s: number
        m: number
        l: number
        xl: number
        xxl: number
      }
      breakpoints: {
        phone: number
        longPhone: {
          width: number
          height: number
        }
        tablet: number
        largeTablet: number
      }
      borderRadii: {
        corner: number
        icon: number
        base: number
        tag: number
        shadow: number
        cardListItem: number
        buttonMain: number
        buttonInner: number
      }
      textVariants: {
        heading: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        subheading: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        body: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        bodyLink: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        bodyError: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardTitle: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardBody: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardBodyItalic: {
          fontFamily: string
          fontWeight: string
          fontStyle: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formLabel: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formValue: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formPlaceholder: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        buttonTextMain: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        buttonTextInner: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
      }
      cardVariants: {
        square: {
          borderRadius: string
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          bg: string
          width: number
          height: number
          shadowOpacity: number
          shadowRadius: number
        }
        listItem: {
          borderRadius: string
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          bg: string
          width: number
          height: number
          shadowOpacity: number
          shadowRadius: number
        }
        stack: {
          bg: string
          shadowOpacity: number
          width: number
          shadowRadius: number
        }
      }
      buttonVariants: {
        main: {
          borderRadius: string
          height: number
          width: number
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          shadowOpacity: number
          shadowRadius: number
        }
        inner: {
          borderRadius: string
          borderWidth: number
          height: number
          paddingHorizontal: string
          paddingVertical: string
        }
      }
      zIndices: {
        low: number
        tall: number
      }
    }> &
    import('@shopify/restyle').TypographyProps<{
      colors: {
        transparent: string
        success: string
        successMuted: string
        error: string
        link: string
        white: string
        black: string
        primary: string
        primaryMuted: string
        secondary: string
        text: string
        textMuted: string
        textMutedLight: string
        inputRequired: string
        inputBorder: string
        inputPlaceholder: string
        boxShadow: string
      }
      spacing: {
        xxs: number
        xs: number
        s: number
        m: number
        l: number
        xl: number
        xxl: number
      }
      breakpoints: {
        phone: number
        longPhone: {
          width: number
          height: number
        }
        tablet: number
        largeTablet: number
      }
      borderRadii: {
        corner: number
        icon: number
        base: number
        tag: number
        shadow: number
        cardListItem: number
        buttonMain: number
        buttonInner: number
      }
      textVariants: {
        heading: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        subheading: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        body: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        bodyLink: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        bodyError: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardTitle: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardBody: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardBodyItalic: {
          fontFamily: string
          fontWeight: string
          fontStyle: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formLabel: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formValue: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formPlaceholder: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        buttonTextMain: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        buttonTextInner: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
      }
      cardVariants: {
        square: {
          borderRadius: string
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          bg: string
          width: number
          height: number
          shadowOpacity: number
          shadowRadius: number
        }
        listItem: {
          borderRadius: string
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          bg: string
          width: number
          height: number
          shadowOpacity: number
          shadowRadius: number
        }
        stack: {
          bg: string
          shadowOpacity: number
          width: number
          shadowRadius: number
        }
      }
      buttonVariants: {
        main: {
          borderRadius: string
          height: number
          width: number
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          shadowOpacity: number
          shadowRadius: number
        }
        inner: {
          borderRadius: string
          borderWidth: number
          height: number
          paddingHorizontal: string
          paddingVertical: string
        }
      }
      zIndices: {
        low: number
        tall: number
      }
    }> &
    import('@shopify/restyle').SpacingProps<{
      colors: {
        transparent: string
        success: string
        successMuted: string
        error: string
        link: string
        white: string
        black: string
        primary: string
        primaryMuted: string
        secondary: string
        text: string
        textMuted: string
        textMutedLight: string
        inputRequired: string
        inputBorder: string
        inputPlaceholder: string
        boxShadow: string
      }
      spacing: {
        xxs: number
        xs: number
        s: number
        m: number
        l: number
        xl: number
        xxl: number
      }
      breakpoints: {
        phone: number
        longPhone: {
          width: number
          height: number
        }
        tablet: number
        largeTablet: number
      }
      borderRadii: {
        corner: number
        icon: number
        base: number
        tag: number
        shadow: number
        cardListItem: number
        buttonMain: number
        buttonInner: number
      }
      textVariants: {
        heading: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        subheading: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        body: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        bodyLink: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        bodyError: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardTitle: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardBody: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardBodyItalic: {
          fontFamily: string
          fontWeight: string
          fontStyle: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formLabel: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formValue: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formPlaceholder: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        buttonTextMain: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        buttonTextInner: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
      }
      cardVariants: {
        square: {
          borderRadius: string
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          bg: string
          width: number
          height: number
          shadowOpacity: number
          shadowRadius: number
        }
        listItem: {
          borderRadius: string
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          bg: string
          width: number
          height: number
          shadowOpacity: number
          shadowRadius: number
        }
        stack: {
          bg: string
          shadowOpacity: number
          width: number
          shadowRadius: number
        }
      }
      buttonVariants: {
        main: {
          borderRadius: string
          height: number
          width: number
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          shadowOpacity: number
          shadowRadius: number
        }
        inner: {
          borderRadius: string
          borderWidth: number
          height: number
          paddingHorizontal: string
          paddingVertical: string
        }
      }
      zIndices: {
        low: number
        tall: number
      }
    }> & {
      textShadowOffset?: import('@shopify/restyle').ResponsiveValue<
        | {
            width: number
            height: number
          }
        | undefined,
        {
          colors: {
            transparent: string
            success: string
            successMuted: string
            error: string
            link: string
            white: string
            black: string
            primary: string
            primaryMuted: string
            secondary: string
            text: string
            textMuted: string
            textMutedLight: string
            inputRequired: string
            inputBorder: string
            inputPlaceholder: string
            boxShadow: string
          }
          spacing: {
            xxs: number
            xs: number
            s: number
            m: number
            l: number
            xl: number
            xxl: number
          }
          breakpoints: {
            phone: number
            longPhone: {
              width: number
              height: number
            }
            tablet: number
            largeTablet: number
          }
          borderRadii: {
            corner: number
            icon: number
            base: number
            tag: number
            shadow: number
            cardListItem: number
            buttonMain: number
            buttonInner: number
          }
          textVariants: {
            heading: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            subheading: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            body: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            bodyLink: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            bodyError: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            cardTitle: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            cardBody: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            cardBodyItalic: {
              fontFamily: string
              fontWeight: string
              fontStyle: string
              fontSize: number
              lineHeight: number
              color: string
            }
            formLabel: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            formValue: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            formPlaceholder: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            buttonTextMain: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            buttonTextInner: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
          }
          cardVariants: {
            square: {
              borderRadius: string
              shadowColor: string
              shadowOffset: {
                width: number
                height: number
              }
              bg: string
              width: number
              height: number
              shadowOpacity: number
              shadowRadius: number
            }
            listItem: {
              borderRadius: string
              shadowColor: string
              shadowOffset: {
                width: number
                height: number
              }
              bg: string
              width: number
              height: number
              shadowOpacity: number
              shadowRadius: number
            }
            stack: {
              bg: string
              shadowOpacity: number
              width: number
              shadowRadius: number
            }
          }
          buttonVariants: {
            main: {
              borderRadius: string
              height: number
              width: number
              shadowColor: string
              shadowOffset: {
                width: number
                height: number
              }
              shadowOpacity: number
              shadowRadius: number
            }
            inner: {
              borderRadius: string
              borderWidth: number
              height: number
              paddingHorizontal: string
              paddingVertical: string
            }
          }
          zIndices: {
            low: number
            tall: number
          }
        }
      >
      textShadowRadius?: import('@shopify/restyle').ResponsiveValue<
        number | undefined,
        {
          colors: {
            transparent: string
            success: string
            successMuted: string
            error: string
            link: string
            white: string
            black: string
            primary: string
            primaryMuted: string
            secondary: string
            text: string
            textMuted: string
            textMutedLight: string
            inputRequired: string
            inputBorder: string
            inputPlaceholder: string
            boxShadow: string
          }
          spacing: {
            xxs: number
            xs: number
            s: number
            m: number
            l: number
            xl: number
            xxl: number
          }
          breakpoints: {
            phone: number
            longPhone: {
              width: number
              height: number
            }
            tablet: number
            largeTablet: number
          }
          borderRadii: {
            corner: number
            icon: number
            base: number
            tag: number
            shadow: number
            cardListItem: number
            buttonMain: number
            buttonInner: number
          }
          textVariants: {
            heading: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            subheading: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            body: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            bodyLink: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            bodyError: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            cardTitle: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            cardBody: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            cardBodyItalic: {
              fontFamily: string
              fontWeight: string
              fontStyle: string
              fontSize: number
              lineHeight: number
              color: string
            }
            formLabel: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            formValue: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            formPlaceholder: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            buttonTextMain: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            buttonTextInner: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
          }
          cardVariants: {
            square: {
              borderRadius: string
              shadowColor: string
              shadowOffset: {
                width: number
                height: number
              }
              bg: string
              width: number
              height: number
              shadowOpacity: number
              shadowRadius: number
            }
            listItem: {
              borderRadius: string
              shadowColor: string
              shadowOffset: {
                width: number
                height: number
              }
              bg: string
              width: number
              height: number
              shadowOpacity: number
              shadowRadius: number
            }
            stack: {
              bg: string
              shadowOpacity: number
              width: number
              shadowRadius: number
            }
          }
          buttonVariants: {
            main: {
              borderRadius: string
              height: number
              width: number
              shadowColor: string
              shadowOffset: {
                width: number
                height: number
              }
              shadowOpacity: number
              shadowRadius: number
            }
            inner: {
              borderRadius: string
              borderWidth: number
              height: number
              paddingHorizontal: string
              paddingVertical: string
            }
          }
          zIndices: {
            low: number
            tall: number
          }
        }
      >
    } & {
      textShadowColor?:
        | import('@shopify/restyle').ResponsiveValue<
            | 'transparent'
            | 'text'
            | 'link'
            | 'error'
            | 'textMuted'
            | 'primary'
            | 'boxShadow'
            | 'white'
            | 'success'
            | 'successMuted'
            | 'black'
            | 'primaryMuted'
            | 'secondary'
            | 'textMutedLight'
            | 'inputRequired'
            | 'inputBorder'
            | 'inputPlaceholder',
            {
              colors: {
                transparent: string
                success: string
                successMuted: string
                error: string
                link: string
                white: string
                black: string
                primary: string
                primaryMuted: string
                secondary: string
                text: string
                textMuted: string
                textMutedLight: string
                inputRequired: string
                inputBorder: string
                inputPlaceholder: string
                boxShadow: string
              }
              spacing: {
                xxs: number
                xs: number
                s: number
                m: number
                l: number
                xl: number
                xxl: number
              }
              breakpoints: {
                phone: number
                longPhone: {
                  width: number
                  height: number
                }
                tablet: number
                largeTablet: number
              }
              borderRadii: {
                corner: number
                icon: number
                base: number
                tag: number
                shadow: number
                cardListItem: number
                buttonMain: number
                buttonInner: number
              }
              textVariants: {
                heading: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                subheading: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                body: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                bodyLink: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                bodyError: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                cardTitle: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                cardBody: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                cardBodyItalic: {
                  fontFamily: string
                  fontWeight: string
                  fontStyle: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                formLabel: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                formValue: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                formPlaceholder: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                buttonTextMain: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                buttonTextInner: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
              }
              cardVariants: {
                square: {
                  borderRadius: string
                  shadowColor: string
                  shadowOffset: {
                    width: number
                    height: number
                  }
                  bg: string
                  width: number
                  height: number
                  shadowOpacity: number
                  shadowRadius: number
                }
                listItem: {
                  borderRadius: string
                  shadowColor: string
                  shadowOffset: {
                    width: number
                    height: number
                  }
                  bg: string
                  width: number
                  height: number
                  shadowOpacity: number
                  shadowRadius: number
                }
                stack: {
                  bg: string
                  shadowOpacity: number
                  width: number
                  shadowRadius: number
                }
              }
              buttonVariants: {
                main: {
                  borderRadius: string
                  height: number
                  width: number
                  shadowColor: string
                  shadowOffset: {
                    width: number
                    height: number
                  }
                  shadowOpacity: number
                  shadowRadius: number
                }
                inner: {
                  borderRadius: string
                  borderWidth: number
                  height: number
                  paddingHorizontal: string
                  paddingVertical: string
                }
              }
              zIndices: {
                low: number
                tall: number
              }
            }
          >
        | undefined
    } & import('@shopify/restyle').VariantProps<
      {
        colors: {
          transparent: string
          success: string
          successMuted: string
          error: string
          link: string
          white: string
          black: string
          primary: string
          primaryMuted: string
          secondary: string
          text: string
          textMuted: string
          textMutedLight: string
          inputRequired: string
          inputBorder: string
          inputPlaceholder: string
          boxShadow: string
        }
        spacing: {
          xxs: number
          xs: number
          s: number
          m: number
          l: number
          xl: number
          xxl: number
        }
        breakpoints: {
          phone: number
          longPhone: {
            width: number
            height: number
          }
          tablet: number
          largeTablet: number
        }
        borderRadii: {
          corner: number
          icon: number
          base: number
          tag: number
          shadow: number
          cardListItem: number
          buttonMain: number
          buttonInner: number
        }
        textVariants: {
          heading: {
            fontFamily: string
            fontWeight: string
            fontSize: number
            lineHeight: number
            color: string
          }
          subheading: {
            fontFamily: string
            fontWeight: string
            fontSize: number
            lineHeight: number
            color: string
          }
          body: {
            fontFamily: string
            fontWeight: string
            fontSize: number
            lineHeight: number
            color: string
          }
          bodyLink: {
            fontFamily: string
            fontWeight: string
            fontSize: number
            lineHeight: number
            color: string
          }
          bodyError: {
            fontFamily: string
            fontWeight: string
            fontSize: number
            lineHeight: number
            color: string
          }
          cardTitle: {
            fontFamily: string
            fontWeight: string
            fontSize: number
            lineHeight: number
            color: string
          }
          cardBody: {
            fontFamily: string
            fontWeight: string
            fontSize: number
            lineHeight: number
            color: string
          }
          cardBodyItalic: {
            fontFamily: string
            fontWeight: string
            fontStyle: string
            fontSize: number
            lineHeight: number
            color: string
          }
          formLabel: {
            fontFamily: string
            fontWeight: string
            fontSize: number
            lineHeight: number
            color: string
          }
          formValue: {
            fontFamily: string
            fontWeight: string
            fontSize: number
            lineHeight: number
            color: string
          }
          formPlaceholder: {
            fontFamily: string
            fontWeight: string
            fontSize: number
            lineHeight: number
            color: string
          }
          buttonTextMain: {
            fontFamily: string
            fontWeight: string
            fontSize: number
            lineHeight: number
            color: string
          }
          buttonTextInner: {
            fontFamily: string
            fontWeight: string
            fontSize: number
            lineHeight: number
            color: string
          }
        }
        cardVariants: {
          square: {
            borderRadius: string
            shadowColor: string
            shadowOffset: {
              width: number
              height: number
            }
            bg: string
            width: number
            height: number
            shadowOpacity: number
            shadowRadius: number
          }
          listItem: {
            borderRadius: string
            shadowColor: string
            shadowOffset: {
              width: number
              height: number
            }
            bg: string
            width: number
            height: number
            shadowOpacity: number
            shadowRadius: number
          }
          stack: {
            bg: string
            shadowOpacity: number
            width: number
            shadowRadius: number
          }
        }
        buttonVariants: {
          main: {
            borderRadius: string
            height: number
            width: number
            shadowColor: string
            shadowOffset: {
              width: number
              height: number
            }
            shadowOpacity: number
            shadowRadius: number
          }
          inner: {
            borderRadius: string
            borderWidth: number
            height: number
            paddingHorizontal: string
            paddingVertical: string
          }
        }
        zIndices: {
          low: number
          tall: number
        }
      },
      'textVariants',
      'variant'
    > &
    import('@shopify/restyle').SpacingShorthandProps<{
      colors: {
        transparent: string
        success: string
        successMuted: string
        error: string
        link: string
        white: string
        black: string
        primary: string
        primaryMuted: string
        secondary: string
        text: string
        textMuted: string
        textMutedLight: string
        inputRequired: string
        inputBorder: string
        inputPlaceholder: string
        boxShadow: string
      }
      spacing: {
        xxs: number
        xs: number
        s: number
        m: number
        l: number
        xl: number
        xxl: number
      }
      breakpoints: {
        phone: number
        longPhone: {
          width: number
          height: number
        }
        tablet: number
        largeTablet: number
      }
      borderRadii: {
        corner: number
        icon: number
        base: number
        tag: number
        shadow: number
        cardListItem: number
        buttonMain: number
        buttonInner: number
      }
      textVariants: {
        heading: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        subheading: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        body: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        bodyLink: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        bodyError: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardTitle: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardBody: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        cardBodyItalic: {
          fontFamily: string
          fontWeight: string
          fontStyle: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formLabel: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formValue: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        formPlaceholder: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        buttonTextMain: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
        buttonTextInner: {
          fontFamily: string
          fontWeight: string
          fontSize: number
          lineHeight: number
          color: string
        }
      }
      cardVariants: {
        square: {
          borderRadius: string
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          bg: string
          width: number
          height: number
          shadowOpacity: number
          shadowRadius: number
        }
        listItem: {
          borderRadius: string
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          bg: string
          width: number
          height: number
          shadowOpacity: number
          shadowRadius: number
        }
        stack: {
          bg: string
          shadowOpacity: number
          width: number
          shadowRadius: number
        }
      }
      buttonVariants: {
        main: {
          borderRadius: string
          height: number
          width: number
          shadowColor: string
          shadowOffset: {
            width: number
            height: number
          }
          shadowOpacity: number
          shadowRadius: number
        }
        inner: {
          borderRadius: string
          borderWidth: number
          height: number
          paddingHorizontal: string
          paddingVertical: string
        }
      }
      zIndices: {
        low: number
        tall: number
      }
    }> &
    RNTextInputProps &
    import('react').RefAttributes<unknown>
> & {
  defaultProps?:
    | Partial<
        import('@shopify/restyle').ColorProps<{
          colors: {
            transparent: string
            success: string
            successMuted: string
            error: string
            link: string
            white: string
            black: string
            primary: string
            primaryMuted: string
            secondary: string
            text: string
            textMuted: string
            textMutedLight: string
            inputRequired: string
            inputBorder: string
            inputPlaceholder: string
            boxShadow: string
          }
          spacing: {
            xxs: number
            xs: number
            s: number
            m: number
            l: number
            xl: number
            xxl: number
          }
          breakpoints: {
            phone: number
            longPhone: {
              width: number
              height: number
            }
            tablet: number
            largeTablet: number
          }
          borderRadii: {
            corner: number
            icon: number
            base: number
            tag: number
            shadow: number
            cardListItem: number
            buttonMain: number
            buttonInner: number
          }
          textVariants: {
            heading: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            subheading: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            body: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            bodyLink: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            bodyError: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            cardTitle: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            cardBody: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            cardBodyItalic: {
              fontFamily: string
              fontWeight: string
              fontStyle: string
              fontSize: number
              lineHeight: number
              color: string
            }
            formLabel: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            formValue: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            formPlaceholder: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            buttonTextMain: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
            buttonTextInner: {
              fontFamily: string
              fontWeight: string
              fontSize: number
              lineHeight: number
              color: string
            }
          }
          cardVariants: {
            square: {
              borderRadius: string
              shadowColor: string
              shadowOffset: {
                width: number
                height: number
              }
              bg: string
              width: number
              height: number
              shadowOpacity: number
              shadowRadius: number
            }
            listItem: {
              borderRadius: string
              shadowColor: string
              shadowOffset: {
                width: number
                height: number
              }
              bg: string
              width: number
              height: number
              shadowOpacity: number
              shadowRadius: number
            }
            stack: {
              bg: string
              shadowOpacity: number
              width: number
              shadowRadius: number
            }
          }
          buttonVariants: {
            main: {
              borderRadius: string
              height: number
              width: number
              shadowColor: string
              shadowOffset: {
                width: number
                height: number
              }
              shadowOpacity: number
              shadowRadius: number
            }
            inner: {
              borderRadius: string
              borderWidth: number
              height: number
              paddingHorizontal: string
              paddingVertical: string
            }
          }
          zIndices: {
            low: number
            tall: number
          }
        }> &
          import('@shopify/restyle').OpacityProps<{
            colors: {
              transparent: string
              success: string
              successMuted: string
              error: string
              link: string
              white: string
              black: string
              primary: string
              primaryMuted: string
              secondary: string
              text: string
              textMuted: string
              textMutedLight: string
              inputRequired: string
              inputBorder: string
              inputPlaceholder: string
              boxShadow: string
            }
            spacing: {
              xxs: number
              xs: number
              s: number
              m: number
              l: number
              xl: number
              xxl: number
            }
            breakpoints: {
              phone: number
              longPhone: {
                width: number
                height: number
              }
              tablet: number
              largeTablet: number
            }
            borderRadii: {
              corner: number
              icon: number
              base: number
              tag: number
              shadow: number
              cardListItem: number
              buttonMain: number
              buttonInner: number
            }
            textVariants: {
              heading: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              subheading: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              body: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              bodyLink: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              bodyError: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardTitle: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardBody: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardBodyItalic: {
                fontFamily: string
                fontWeight: string
                fontStyle: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formLabel: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formValue: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formPlaceholder: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              buttonTextMain: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              buttonTextInner: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
            }
            cardVariants: {
              square: {
                borderRadius: string
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                bg: string
                width: number
                height: number
                shadowOpacity: number
                shadowRadius: number
              }
              listItem: {
                borderRadius: string
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                bg: string
                width: number
                height: number
                shadowOpacity: number
                shadowRadius: number
              }
              stack: {
                bg: string
                shadowOpacity: number
                width: number
                shadowRadius: number
              }
            }
            buttonVariants: {
              main: {
                borderRadius: string
                height: number
                width: number
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                shadowOpacity: number
                shadowRadius: number
              }
              inner: {
                borderRadius: string
                borderWidth: number
                height: number
                paddingHorizontal: string
                paddingVertical: string
              }
            }
            zIndices: {
              low: number
              tall: number
            }
          }> &
          import('@shopify/restyle').VisibleProps<{
            colors: {
              transparent: string
              success: string
              successMuted: string
              error: string
              link: string
              white: string
              black: string
              primary: string
              primaryMuted: string
              secondary: string
              text: string
              textMuted: string
              textMutedLight: string
              inputRequired: string
              inputBorder: string
              inputPlaceholder: string
              boxShadow: string
            }
            spacing: {
              xxs: number
              xs: number
              s: number
              m: number
              l: number
              xl: number
              xxl: number
            }
            breakpoints: {
              phone: number
              longPhone: {
                width: number
                height: number
              }
              tablet: number
              largeTablet: number
            }
            borderRadii: {
              corner: number
              icon: number
              base: number
              tag: number
              shadow: number
              cardListItem: number
              buttonMain: number
              buttonInner: number
            }
            textVariants: {
              heading: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              subheading: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              body: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              bodyLink: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              bodyError: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardTitle: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardBody: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardBodyItalic: {
                fontFamily: string
                fontWeight: string
                fontStyle: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formLabel: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formValue: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formPlaceholder: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              buttonTextMain: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              buttonTextInner: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
            }
            cardVariants: {
              square: {
                borderRadius: string
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                bg: string
                width: number
                height: number
                shadowOpacity: number
                shadowRadius: number
              }
              listItem: {
                borderRadius: string
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                bg: string
                width: number
                height: number
                shadowOpacity: number
                shadowRadius: number
              }
              stack: {
                bg: string
                shadowOpacity: number
                width: number
                shadowRadius: number
              }
            }
            buttonVariants: {
              main: {
                borderRadius: string
                height: number
                width: number
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                shadowOpacity: number
                shadowRadius: number
              }
              inner: {
                borderRadius: string
                borderWidth: number
                height: number
                paddingHorizontal: string
                paddingVertical: string
              }
            }
            zIndices: {
              low: number
              tall: number
            }
          }> &
          import('@shopify/restyle').TypographyProps<{
            colors: {
              transparent: string
              success: string
              successMuted: string
              error: string
              link: string
              white: string
              black: string
              primary: string
              primaryMuted: string
              secondary: string
              text: string
              textMuted: string
              textMutedLight: string
              inputRequired: string
              inputBorder: string
              inputPlaceholder: string
              boxShadow: string
            }
            spacing: {
              xxs: number
              xs: number
              s: number
              m: number
              l: number
              xl: number
              xxl: number
            }
            breakpoints: {
              phone: number
              longPhone: {
                width: number
                height: number
              }
              tablet: number
              largeTablet: number
            }
            borderRadii: {
              corner: number
              icon: number
              base: number
              tag: number
              shadow: number
              cardListItem: number
              buttonMain: number
              buttonInner: number
            }
            textVariants: {
              heading: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              subheading: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              body: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              bodyLink: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              bodyError: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardTitle: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardBody: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardBodyItalic: {
                fontFamily: string
                fontWeight: string
                fontStyle: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formLabel: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formValue: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formPlaceholder: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              buttonTextMain: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              buttonTextInner: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
            }
            cardVariants: {
              square: {
                borderRadius: string
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                bg: string
                width: number
                height: number
                shadowOpacity: number
                shadowRadius: number
              }
              listItem: {
                borderRadius: string
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                bg: string
                width: number
                height: number
                shadowOpacity: number
                shadowRadius: number
              }
              stack: {
                bg: string
                shadowOpacity: number
                width: number
                shadowRadius: number
              }
            }
            buttonVariants: {
              main: {
                borderRadius: string
                height: number
                width: number
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                shadowOpacity: number
                shadowRadius: number
              }
              inner: {
                borderRadius: string
                borderWidth: number
                height: number
                paddingHorizontal: string
                paddingVertical: string
              }
            }
            zIndices: {
              low: number
              tall: number
            }
          }> &
          import('@shopify/restyle').SpacingProps<{
            colors: {
              transparent: string
              success: string
              successMuted: string
              error: string
              link: string
              white: string
              black: string
              primary: string
              primaryMuted: string
              secondary: string
              text: string
              textMuted: string
              textMutedLight: string
              inputRequired: string
              inputBorder: string
              inputPlaceholder: string
              boxShadow: string
            }
            spacing: {
              xxs: number
              xs: number
              s: number
              m: number
              l: number
              xl: number
              xxl: number
            }
            breakpoints: {
              phone: number
              longPhone: {
                width: number
                height: number
              }
              tablet: number
              largeTablet: number
            }
            borderRadii: {
              corner: number
              icon: number
              base: number
              tag: number
              shadow: number
              cardListItem: number
              buttonMain: number
              buttonInner: number
            }
            textVariants: {
              heading: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              subheading: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              body: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              bodyLink: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              bodyError: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardTitle: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardBody: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardBodyItalic: {
                fontFamily: string
                fontWeight: string
                fontStyle: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formLabel: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formValue: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formPlaceholder: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              buttonTextMain: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              buttonTextInner: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
            }
            cardVariants: {
              square: {
                borderRadius: string
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                bg: string
                width: number
                height: number
                shadowOpacity: number
                shadowRadius: number
              }
              listItem: {
                borderRadius: string
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                bg: string
                width: number
                height: number
                shadowOpacity: number
                shadowRadius: number
              }
              stack: {
                bg: string
                shadowOpacity: number
                width: number
                shadowRadius: number
              }
            }
            buttonVariants: {
              main: {
                borderRadius: string
                height: number
                width: number
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                shadowOpacity: number
                shadowRadius: number
              }
              inner: {
                borderRadius: string
                borderWidth: number
                height: number
                paddingHorizontal: string
                paddingVertical: string
              }
            }
            zIndices: {
              low: number
              tall: number
            }
          }> & {
            textShadowOffset?: import('@shopify/restyle').ResponsiveValue<
              | {
                  width: number
                  height: number
                }
              | undefined,
              {
                colors: {
                  transparent: string
                  success: string
                  successMuted: string
                  error: string
                  link: string
                  white: string
                  black: string
                  primary: string
                  primaryMuted: string
                  secondary: string
                  text: string
                  textMuted: string
                  textMutedLight: string
                  inputRequired: string
                  inputBorder: string
                  inputPlaceholder: string
                  boxShadow: string
                }
                spacing: {
                  xxs: number
                  xs: number
                  s: number
                  m: number
                  l: number
                  xl: number
                  xxl: number
                }
                breakpoints: {
                  phone: number
                  longPhone: {
                    width: number
                    height: number
                  }
                  tablet: number
                  largeTablet: number
                }
                borderRadii: {
                  corner: number
                  icon: number
                  base: number
                  tag: number
                  shadow: number
                  cardListItem: number
                  buttonMain: number
                  buttonInner: number
                }
                textVariants: {
                  heading: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  subheading: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  body: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  bodyLink: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  bodyError: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  cardTitle: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  cardBody: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  cardBodyItalic: {
                    fontFamily: string
                    fontWeight: string
                    fontStyle: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  formLabel: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  formValue: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  formPlaceholder: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  buttonTextMain: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  buttonTextInner: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                }
                cardVariants: {
                  square: {
                    borderRadius: string
                    shadowColor: string
                    shadowOffset: {
                      width: number
                      height: number
                    }
                    bg: string
                    width: number
                    height: number
                    shadowOpacity: number
                    shadowRadius: number
                  }
                  listItem: {
                    borderRadius: string
                    shadowColor: string
                    shadowOffset: {
                      width: number
                      height: number
                    }
                    bg: string
                    width: number
                    height: number
                    shadowOpacity: number
                    shadowRadius: number
                  }
                  stack: {
                    bg: string
                    shadowOpacity: number
                    width: number
                    shadowRadius: number
                  }
                }
                buttonVariants: {
                  main: {
                    borderRadius: string
                    height: number
                    width: number
                    shadowColor: string
                    shadowOffset: {
                      width: number
                      height: number
                    }
                    shadowOpacity: number
                    shadowRadius: number
                  }
                  inner: {
                    borderRadius: string
                    borderWidth: number
                    height: number
                    paddingHorizontal: string
                    paddingVertical: string
                  }
                }
                zIndices: {
                  low: number
                  tall: number
                }
              }
            >
            textShadowRadius?: import('@shopify/restyle').ResponsiveValue<
              number | undefined,
              {
                colors: {
                  transparent: string
                  success: string
                  successMuted: string
                  error: string
                  link: string
                  white: string
                  black: string
                  primary: string
                  primaryMuted: string
                  secondary: string
                  text: string
                  textMuted: string
                  textMutedLight: string
                  inputRequired: string
                  inputBorder: string
                  inputPlaceholder: string
                  boxShadow: string
                }
                spacing: {
                  xxs: number
                  xs: number
                  s: number
                  m: number
                  l: number
                  xl: number
                  xxl: number
                }
                breakpoints: {
                  phone: number
                  longPhone: {
                    width: number
                    height: number
                  }
                  tablet: number
                  largeTablet: number
                }
                borderRadii: {
                  corner: number
                  icon: number
                  base: number
                  tag: number
                  shadow: number
                  cardListItem: number
                  buttonMain: number
                  buttonInner: number
                }
                textVariants: {
                  heading: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  subheading: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  body: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  bodyLink: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  bodyError: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  cardTitle: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  cardBody: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  cardBodyItalic: {
                    fontFamily: string
                    fontWeight: string
                    fontStyle: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  formLabel: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  formValue: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  formPlaceholder: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  buttonTextMain: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                  buttonTextInner: {
                    fontFamily: string
                    fontWeight: string
                    fontSize: number
                    lineHeight: number
                    color: string
                  }
                }
                cardVariants: {
                  square: {
                    borderRadius: string
                    shadowColor: string
                    shadowOffset: {
                      width: number
                      height: number
                    }
                    bg: string
                    width: number
                    height: number
                    shadowOpacity: number
                    shadowRadius: number
                  }
                  listItem: {
                    borderRadius: string
                    shadowColor: string
                    shadowOffset: {
                      width: number
                      height: number
                    }
                    bg: string
                    width: number
                    height: number
                    shadowOpacity: number
                    shadowRadius: number
                  }
                  stack: {
                    bg: string
                    shadowOpacity: number
                    width: number
                    shadowRadius: number
                  }
                }
                buttonVariants: {
                  main: {
                    borderRadius: string
                    height: number
                    width: number
                    shadowColor: string
                    shadowOffset: {
                      width: number
                      height: number
                    }
                    shadowOpacity: number
                    shadowRadius: number
                  }
                  inner: {
                    borderRadius: string
                    borderWidth: number
                    height: number
                    paddingHorizontal: string
                    paddingVertical: string
                  }
                }
                zIndices: {
                  low: number
                  tall: number
                }
              }
            >
          } & {
            textShadowColor?:
              | import('@shopify/restyle').ResponsiveValue<
                  | 'transparent'
                  | 'text'
                  | 'link'
                  | 'error'
                  | 'textMuted'
                  | 'primary'
                  | 'boxShadow'
                  | 'white'
                  | 'success'
                  | 'successMuted'
                  | 'black'
                  | 'primaryMuted'
                  | 'secondary'
                  | 'textMutedLight'
                  | 'inputRequired'
                  | 'inputBorder'
                  | 'inputPlaceholder',
                  {
                    colors: {
                      transparent: string
                      success: string
                      successMuted: string
                      error: string
                      link: string
                      white: string
                      black: string
                      primary: string
                      primaryMuted: string
                      secondary: string
                      text: string
                      textMuted: string
                      textMutedLight: string
                      inputRequired: string
                      inputBorder: string
                      inputPlaceholder: string
                      boxShadow: string
                    }
                    spacing: {
                      xxs: number
                      xs: number
                      s: number
                      m: number
                      l: number
                      xl: number
                      xxl: number
                    }
                    breakpoints: {
                      phone: number
                      longPhone: {
                        width: number
                        height: number
                      }
                      tablet: number
                      largeTablet: number
                    }
                    borderRadii: {
                      corner: number
                      icon: number
                      base: number
                      tag: number
                      shadow: number
                      cardListItem: number
                      buttonMain: number
                      buttonInner: number
                    }
                    textVariants: {
                      heading: {
                        fontFamily: string
                        fontWeight: string
                        fontSize: number
                        lineHeight: number
                        color: string
                      }
                      subheading: {
                        fontFamily: string
                        fontWeight: string
                        fontSize: number
                        lineHeight: number
                        color: string
                      }
                      body: {
                        fontFamily: string
                        fontWeight: string
                        fontSize: number
                        lineHeight: number
                        color: string
                      }
                      bodyLink: {
                        fontFamily: string
                        fontWeight: string
                        fontSize: number
                        lineHeight: number
                        color: string
                      }
                      bodyError: {
                        fontFamily: string
                        fontWeight: string
                        fontSize: number
                        lineHeight: number
                        color: string
                      }
                      cardTitle: {
                        fontFamily: string
                        fontWeight: string
                        fontSize: number
                        lineHeight: number
                        color: string
                      }
                      cardBody: {
                        fontFamily: string
                        fontWeight: string
                        fontSize: number
                        lineHeight: number
                        color: string
                      }
                      cardBodyItalic: {
                        fontFamily: string
                        fontWeight: string
                        fontStyle: string
                        fontSize: number
                        lineHeight: number
                        color: string
                      }
                      formLabel: {
                        fontFamily: string
                        fontWeight: string
                        fontSize: number
                        lineHeight: number
                        color: string
                      }
                      formValue: {
                        fontFamily: string
                        fontWeight: string
                        fontSize: number
                        lineHeight: number
                        color: string
                      }
                      formPlaceholder: {
                        fontFamily: string
                        fontWeight: string
                        fontSize: number
                        lineHeight: number
                        color: string
                      }
                      buttonTextMain: {
                        fontFamily: string
                        fontWeight: string
                        fontSize: number
                        lineHeight: number
                        color: string
                      }
                      buttonTextInner: {
                        fontFamily: string
                        fontWeight: string
                        fontSize: number
                        lineHeight: number
                        color: string
                      }
                    }
                    cardVariants: {
                      square: {
                        borderRadius: string
                        shadowColor: string
                        shadowOffset: {
                          width: number
                          height: number
                        }
                        bg: string
                        width: number
                        height: number
                        shadowOpacity: number
                        shadowRadius: number
                      }
                      listItem: {
                        borderRadius: string
                        shadowColor: string
                        shadowOffset: {
                          width: number
                          height: number
                        }
                        bg: string
                        width: number
                        height: number
                        shadowOpacity: number
                        shadowRadius: number
                      }
                      stack: {
                        bg: string
                        shadowOpacity: number
                        width: number
                        shadowRadius: number
                      }
                    }
                    buttonVariants: {
                      main: {
                        borderRadius: string
                        height: number
                        width: number
                        shadowColor: string
                        shadowOffset: {
                          width: number
                          height: number
                        }
                        shadowOpacity: number
                        shadowRadius: number
                      }
                      inner: {
                        borderRadius: string
                        borderWidth: number
                        height: number
                        paddingHorizontal: string
                        paddingVertical: string
                      }
                    }
                    zIndices: {
                      low: number
                      tall: number
                    }
                  }
                >
              | undefined
          } & import('@shopify/restyle').VariantProps<
            {
              colors: {
                transparent: string
                success: string
                successMuted: string
                error: string
                link: string
                white: string
                black: string
                primary: string
                primaryMuted: string
                secondary: string
                text: string
                textMuted: string
                textMutedLight: string
                inputRequired: string
                inputBorder: string
                inputPlaceholder: string
                boxShadow: string
              }
              spacing: {
                xxs: number
                xs: number
                s: number
                m: number
                l: number
                xl: number
                xxl: number
              }
              breakpoints: {
                phone: number
                longPhone: {
                  width: number
                  height: number
                }
                tablet: number
                largeTablet: number
              }
              borderRadii: {
                corner: number
                icon: number
                base: number
                tag: number
                shadow: number
                cardListItem: number
                buttonMain: number
                buttonInner: number
              }
              textVariants: {
                heading: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                subheading: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                body: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                bodyLink: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                bodyError: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                cardTitle: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                cardBody: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                cardBodyItalic: {
                  fontFamily: string
                  fontWeight: string
                  fontStyle: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                formLabel: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                formValue: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                formPlaceholder: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                buttonTextMain: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
                buttonTextInner: {
                  fontFamily: string
                  fontWeight: string
                  fontSize: number
                  lineHeight: number
                  color: string
                }
              }
              cardVariants: {
                square: {
                  borderRadius: string
                  shadowColor: string
                  shadowOffset: {
                    width: number
                    height: number
                  }
                  bg: string
                  width: number
                  height: number
                  shadowOpacity: number
                  shadowRadius: number
                }
                listItem: {
                  borderRadius: string
                  shadowColor: string
                  shadowOffset: {
                    width: number
                    height: number
                  }
                  bg: string
                  width: number
                  height: number
                  shadowOpacity: number
                  shadowRadius: number
                }
                stack: {
                  bg: string
                  shadowOpacity: number
                  width: number
                  shadowRadius: number
                }
              }
              buttonVariants: {
                main: {
                  borderRadius: string
                  height: number
                  width: number
                  shadowColor: string
                  shadowOffset: {
                    width: number
                    height: number
                  }
                  shadowOpacity: number
                  shadowRadius: number
                }
                inner: {
                  borderRadius: string
                  borderWidth: number
                  height: number
                  paddingHorizontal: string
                  paddingVertical: string
                }
              }
              zIndices: {
                low: number
                tall: number
              }
            },
            'textVariants',
            'variant'
          > &
          import('@shopify/restyle').SpacingShorthandProps<{
            colors: {
              transparent: string
              success: string
              successMuted: string
              error: string
              link: string
              white: string
              black: string
              primary: string
              primaryMuted: string
              secondary: string
              text: string
              textMuted: string
              textMutedLight: string
              inputRequired: string
              inputBorder: string
              inputPlaceholder: string
              boxShadow: string
            }
            spacing: {
              xxs: number
              xs: number
              s: number
              m: number
              l: number
              xl: number
              xxl: number
            }
            breakpoints: {
              phone: number
              longPhone: {
                width: number
                height: number
              }
              tablet: number
              largeTablet: number
            }
            borderRadii: {
              corner: number
              icon: number
              base: number
              tag: number
              shadow: number
              cardListItem: number
              buttonMain: number
              buttonInner: number
            }
            textVariants: {
              heading: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              subheading: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              body: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              bodyLink: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              bodyError: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardTitle: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardBody: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              cardBodyItalic: {
                fontFamily: string
                fontWeight: string
                fontStyle: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formLabel: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formValue: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              formPlaceholder: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              buttonTextMain: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
              buttonTextInner: {
                fontFamily: string
                fontWeight: string
                fontSize: number
                lineHeight: number
                color: string
              }
            }
            cardVariants: {
              square: {
                borderRadius: string
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                bg: string
                width: number
                height: number
                shadowOpacity: number
                shadowRadius: number
              }
              listItem: {
                borderRadius: string
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                bg: string
                width: number
                height: number
                shadowOpacity: number
                shadowRadius: number
              }
              stack: {
                bg: string
                shadowOpacity: number
                width: number
                shadowRadius: number
              }
            }
            buttonVariants: {
              main: {
                borderRadius: string
                height: number
                width: number
                shadowColor: string
                shadowOffset: {
                  width: number
                  height: number
                }
                shadowOpacity: number
                shadowRadius: number
              }
              inner: {
                borderRadius: string
                borderWidth: number
                height: number
                paddingHorizontal: string
                paddingVertical: string
              }
            }
            zIndices: {
              low: number
              tall: number
            }
          }> &
          RNTextInputProps &
          import('react').RefAttributes<unknown>
      >
    | undefined
}
