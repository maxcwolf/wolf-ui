/**
 * @description Custom Shadow Restyle Functions which adds theme access for `shadowRadius`
 * @see https://github.com/Shopify/restyle#custom-restyle-functions
 */
import { createRestyleFunction } from '@shopify/restyle'
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
//# sourceMappingURL=customShadow.js.map
