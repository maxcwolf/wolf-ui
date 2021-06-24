export const getBaseColor = (type, color) => {
  switch (type) {
    case 'contained':
      return color

    case 'outlined':
      return 'white'

    default:
      return color
  }
}
export const getAccentColor = (type, color) => {
  switch (type) {
    case 'contained':
      return 'white'

    case 'outlined':
      return color

    default:
      return 'white'
  }
}
//# sourceMappingURL=getColorUtils.js.map
