# Wolf UI 🐺

A thematic and type-safe React Native component library and Storybook playground monorepo.

## Packages

- [@maxcwolf/ui-react-native](/packages/ui-react-native/README.md)
- [@maxcwolf/ui-tokens](/packages/ui-tokens/README.md)
- [@maxcwolf/playground](/packages/playground/README.md)

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
