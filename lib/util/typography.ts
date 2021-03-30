/**
 * @description Custom Restyle Functions to create props from the theme.
 * @see https://github.com/Shopify/restyle#custom-restyle-functions
 *
 * @todo The goal here to to have basically a 1 to 1 with styled-system's
 *  theme specification so that the same theme object shape can be used for both
 *  web (styled-system) and mobile (restyle) component librarys
 */
import { createRestyleFunction } from '@shopify/restyle'
import { getKeys } from './helpers'

const typographySizeProperties = {
  fontSize: true,
  letterSpacing: true,
  lineHeight: true,
}

export const typographySize = getKeys(typographySizeProperties).map(
  (property) =>
    createRestyleFunction({
      property,
      themeKey: 'spacing', // TODO: add new theme property for typography size?
    }),
)
