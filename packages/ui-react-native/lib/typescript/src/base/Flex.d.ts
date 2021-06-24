import React, { ReactNode } from 'react'
import { View, ViewStyle, StyleProp } from 'react-native'
import { SpacingProps, BackgroundColorProps, LayoutProps } from '@shopify/restyle'
export declare const Flex: React.ForwardRefExoticComponent<
  SpacingProps<{
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
      m: number /** Todo: Add Default Props we may want to add i.e....
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'nowrap',
          */
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
    borderBottomWidth?: import('@shopify/restyle').ResponsiveValue<
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
          m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderLeftWidth?: import('@shopify/restyle').ResponsiveValue<
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
          m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderRightWidth?: import('@shopify/restyle').ResponsiveValue<
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
          m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderStyle?: import('@shopify/restyle').ResponsiveValue<
      'solid' | 'dotted' | 'dashed' | undefined,
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
          m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderTopWidth?: import('@shopify/restyle').ResponsiveValue<
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
          m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderStartWidth?: import('@shopify/restyle').ResponsiveValue<
      string | number | undefined,
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
          m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderEndWidth?: import('@shopify/restyle').ResponsiveValue<
      string | number | undefined,
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
          m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderWidth?: import('@shopify/restyle').ResponsiveValue<
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
          m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderColor?:
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderTopColor?:
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderRightColor?:
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderLeftColor?:
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderBottomColor?:
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderStartColor?:
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderEndColor?:
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
  } & {
    borderRadius?:
      | import('@shopify/restyle').ResponsiveValue<
          | 'shadow'
          | 'cardListItem'
          | 'buttonMain'
          | 'buttonInner'
          | 'base'
          | 'corner'
          | 'icon'
          | 'tag',
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderBottomLeftRadius?:
      | import('@shopify/restyle').ResponsiveValue<
          | 'shadow'
          | 'cardListItem'
          | 'buttonMain'
          | 'buttonInner'
          | 'base'
          | 'corner'
          | 'icon'
          | 'tag',
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderBottomRightRadius?:
      | import('@shopify/restyle').ResponsiveValue<
          | 'shadow'
          | 'cardListItem'
          | 'buttonMain'
          | 'buttonInner'
          | 'base'
          | 'corner'
          | 'icon'
          | 'tag',
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderTopLeftRadius?:
      | import('@shopify/restyle').ResponsiveValue<
          | 'shadow'
          | 'cardListItem'
          | 'buttonMain'
          | 'buttonInner'
          | 'base'
          | 'corner'
          | 'icon'
          | 'tag',
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderTopRightRadius?:
      | import('@shopify/restyle').ResponsiveValue<
          | 'shadow'
          | 'cardListItem'
          | 'buttonMain'
          | 'buttonInner'
          | 'base'
          | 'corner'
          | 'icon'
          | 'tag',
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderBottomStartRadius?:
      | import('@shopify/restyle').ResponsiveValue<
          | 'shadow'
          | 'cardListItem'
          | 'buttonMain'
          | 'buttonInner'
          | 'base'
          | 'corner'
          | 'icon'
          | 'tag',
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderBottomEndRadius?:
      | import('@shopify/restyle').ResponsiveValue<
          | 'shadow'
          | 'cardListItem'
          | 'buttonMain'
          | 'buttonInner'
          | 'base'
          | 'corner'
          | 'icon'
          | 'tag',
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderTopStartRadius?:
      | import('@shopify/restyle').ResponsiveValue<
          | 'shadow'
          | 'cardListItem'
          | 'buttonMain'
          | 'buttonInner'
          | 'base'
          | 'corner'
          | 'icon'
          | 'tag',
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
    borderTopEndRadius?:
      | import('@shopify/restyle').ResponsiveValue<
          | 'shadow'
          | 'cardListItem'
          | 'buttonMain'
          | 'buttonInner'
          | 'base'
          | 'corner'
          | 'icon'
          | 'tag',
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
              m: number /** Todo: Add Default Props we may want to add i.e....
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              */
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
  } & LayoutProps<{
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
        m: number /** Todo: Add Default Props we may want to add i.e....
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'nowrap',
          */
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
    BackgroundColorProps<{
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
        m: number /** Todo: Add Default Props we may want to add i.e....
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'nowrap',
          */
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
      style?: StyleProp<ViewStyle>
      children?: ReactNode
    } & React.RefAttributes<View>
>
