import { TypeProp } from './types'
import { Color } from '../../theme'

export const getBaseColor = (type: TypeProp, color: Color): Color => {
  switch (type) {
    case 'contained':
      return color
    case 'outlined':
      return 'white'
    default:
      return color
  }
}

export const getAccentColor = (type: TypeProp, color: Color): Color => {
  switch (type) {
    case 'contained':
      return 'white'
    case 'outlined':
      return color
    default:
      return 'white'
  }
}
