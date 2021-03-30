# React Native Component Library

A thematic and type-safe React Native component library and Storybook playground.

## Design Tokens

Design tokens are the base level visual design pieces of a design system. They are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development. Tokens are universal and never change across themes. Design tokens are translated into themes for use in styling components.

## Theme

The theme translates the design tokens into more meaningful properties for use in our component styles. The theme should follow the [Theme Specification](https://system-ui.com/theme/) (also see [style-system](https://styled-system.com/theme-specification/)'s or [theme-ui](https://theme-ui.com/theme-spec/)'s theme specification documentation).

## Restyle

This component library uses [Restyle](https://github.com/Shopify/restyle) to create theme-reliant and type-safe components. Restyle is very similar to [styled-system](www.styled-system.com), but has some advantages for React Native. Restyle utilizes the native styling layer rather than relying on Styled Components or Emotion like styled-system does, therefore it requires less runtime style calculation. Restyle also has much better Typescript support out of the box.

From [Restyle's docs](https://github.com/Shopify/restyle#shopifyrestyle):

> The Restyle library provides a type-enforced system for building UI components in React Native with TypeScript. It's a library for building UI libraries, with themability as the core focus.
>
> This library assumes that the UI is built upon a design system that (at the very least) defines a set of colors and spacing constants that lays as a foundation. While the library acknowledges that there can be exceptions to the system by allowing any style to be overridden, it keeps the developer most productive when one-off values are kept to a minimum.

### Restyle Functions

Restyle functions are used to specify how props should be mapped to values in a resulting style object, that can then be passed down to a React Native component.

TODO: New restyle functions should be created for Props that do no have a mapping to theme properties.

#### Default Restyle Functions

Below are the default restyle functions, however one of the goals of this library is to have as close to 1 to 1 API with styled-system's theme specification so that the same theme objects may be used on web (styled-system) as well as mobile (Restyle).

Properties within brackets are aliases / shorthands for the preceding prop name. Generally, favor using the shorthand for consistency and brevity.

| Restyle Function | Props                                                                                                                                                                                                                                                                                                                                  | Theme Key   |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| backgroundColor  | backgroundColor [bg]                                                                                                                                                                                                                                                                                                                   | colors      |
| color            | color                                                                                                                                                                                                                                                                                                                                  | colors      |
| opacity          | opacity                                                                                                                                                                                                                                                                                                                                | _none_      |
| visible          | display (maps `true` / `false` to `flex` / `none`)                                                                                                                                                                                                                                                                                     | _none_      |
| spacing          | margin [m], marginTop [mt], marginRight [mr], marginBottom [mb], marginLeft [ml], marginStart [ms], marginEnd[me], marginHorizontal [mx], marginVertical [my], padding [p], paddingTop [pt], paddingRight [pr], paddingBottom [pb], paddingLeft [pl], paddingStart [ps], paddingEnd [pe], paddingHorizontal [px], paddingVertical [py] | spacing     |
| layout           | width, height, minWidth, maxWidth, minHeight, maxHeight, overflow, aspectRatio, alignContent, alignItems, alignSelf, justifyContent, flex, flexBasis, flexDirection, flexGrow, flexShrink, flexWrap                                                                                                                                    | _none_      |
| position         | position, top, right, bottom, left, start, end                                                                                                                                                                                                                                                                                         | _none_      |
| position         | zIndex                                                                                                                                                                                                                                                                                                                                 | zIndices    |
| border           | borderBottomWidth, borderLeftWidth, borderRightWidth, borderStartWidth, borderEndWidth, borderStyle, borderTopWidth, borderWidth                                                                                                                                                                                                       | _none_      |
| border           | borderColor, borderTopColor, borderRightColor, borderLeftColor, borderStartColor, borderEndColor, borderBottomColor                                                                                                                                                                                                                    | colors      |
| border           | borderRadius, borderBottomLeftRadius, borderBottomRightRadius, borderBottomStartRadius, borderBottomEndRadius, borderTopLeftRadius, borderTopRightRadius, borderTopStartRadius, borderTopEndRadius                                                                                                                                     | borderRadii |
| shadow           | shadowOpacity, shadowOffset, shadowRadius, elevation                                                                                                                                                                                                                                                                                   | _none_      |
| shadow           | shadowColor                                                                                                                                                                                                                                                                                                                            | colors      |
| textShadow       | textShadowOffset, textShadowRadius                                                                                                                                                                                                                                                                                                     | _none_      |
| textShadow       | textShadowColor                                                                                                                                                                                                                                                                                                                        | colors      |
| typography       | fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, textDecorationLine, textDecorationStyle, textTransform                                                                                                                                                                                              | _none_      |
