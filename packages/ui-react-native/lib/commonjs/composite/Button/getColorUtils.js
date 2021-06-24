'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.getAccentColor = exports.getBaseColor = void 0

const getBaseColor = (type, color) => {
  switch (type) {
    case 'contained':
      return color

    case 'outlined':
      return 'white'

    default:
      return color
  }
}

exports.getBaseColor = getBaseColor

const getAccentColor = (type, color) => {
  switch (type) {
    case 'contained':
      return 'white'

    case 'outlined':
      return color

    default:
      return 'white'
  }
}

exports.getAccentColor = getAccentColor
//# sourceMappingURL=getColorUtils.js.map
