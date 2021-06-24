'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.typographySize = void 0

var _restyle = require('@shopify/restyle')

var _keys = require('./keys')

/**
 * @description Custom Restyle Functions to create props from the theme.
 * @see https://github.com/Shopify/restyle#custom-restyle-functions
 *
 * @todo The goal here to to have basically a 1 to 1 with styled-system's
 *  theme specification so that the same theme object shape can be used for both
 *  web (styled-system) and mobile (restyle) component librarys
 */
const typographySizeProperties = {
  fontSize: true,
  letterSpacing: true,
  lineHeight: true,
}
const typographySize = (0, _keys.getKeys)(typographySizeProperties).map(property =>
  (0, _restyle.createRestyleFunction)({
    property,
    themeKey: 'fontSizing', // TODO: add new theme property for typography size
  })
)
exports.typographySize = typographySize
//# sourceMappingURL=customTypography.js.map
