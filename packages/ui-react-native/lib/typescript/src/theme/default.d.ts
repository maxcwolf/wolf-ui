export declare const themeDxm: {
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
export declare type Theme = typeof themeDxm
export declare type Spacing = keyof Theme['spacing']
export declare type Color = keyof Theme['colors']
export declare type TextVariants = keyof Theme['textVariants']
export declare type ButtonVariants = keyof Theme['buttonVariants']
export declare type CardVariants = keyof Theme['cardVariants']
