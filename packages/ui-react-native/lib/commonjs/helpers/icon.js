'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.iconSvgNames = exports.getIconComponent = exports.iconTypes = void 0

var _AntDesign = _interopRequireDefault(require('react-native-vector-icons/AntDesign'))

var _Entypo = _interopRequireDefault(require('react-native-vector-icons/Entypo'))

var _EvilIcons = _interopRequireDefault(require('react-native-vector-icons/EvilIcons'))

var _FontAwesome = _interopRequireDefault(require('react-native-vector-icons/FontAwesome'))

var _Feather = _interopRequireDefault(require('react-native-vector-icons/Feather'))

var _Fontisto = _interopRequireDefault(require('react-native-vector-icons/Fontisto'))

var _Foundation = _interopRequireDefault(require('react-native-vector-icons/Foundation'))

var _Ionicons = _interopRequireDefault(require('react-native-vector-icons/Ionicons'))

var _MaterialIcons = _interopRequireDefault(require('react-native-vector-icons/MaterialIcons'))

var _MaterialCommunityIcons = _interopRequireDefault(
  require('react-native-vector-icons/MaterialCommunityIcons')
)

var _Octicons = _interopRequireDefault(require('react-native-vector-icons/Octicons'))

var _SimpleLineIcons = _interopRequireDefault(require('react-native-vector-icons/SimpleLineIcons'))

var _Zocial = _interopRequireDefault(require('react-native-vector-icons/Zocial'))

var _IconSvg = require('../composite/icon/IconSvg')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const iconTypes = [
  'svg',
  'ant-design',
  'entypo',
  'evilicon',
  'ionicon',
  'feather',
  'font-awesome',
  'fontisto',
  'foundation',
  'material',
  'material-community',
  'octicon',
  'simple-line-icon',
  'zocial',
]
exports.iconTypes = iconTypes

const getIconComponent = type => {
  switch (type) {
    case 'svg':
      return _IconSvg.IconSvg

    case 'ant-design':
      return _AntDesign.default

    case 'evilicon':
      return _EvilIcons.default

    case 'entypo':
      return _Entypo.default

    case 'feather':
      return _Feather.default

    case 'fontisto':
      return _Fontisto.default

    case 'foundation':
      return _Foundation.default

    case 'font-awesome':
      return _FontAwesome.default

    case 'ionicon':
      return _Ionicons.default

    case 'material':
      return _MaterialIcons.default

    case 'material-community':
      return _MaterialCommunityIcons.default

    case 'octicon':
      return _Octicons.default

    case 'simple-line-icon':
      return _SimpleLineIcons.default

    case 'zocial':
      return _Zocial.default

    default:
      return _FontAwesome.default
  }
}

exports.getIconComponent = getIconComponent
const iconSvgNames = [
  'add',
  'angle-up',
  'angle-down',
  'angle-right',
  'angle-left',
  'checkmark',
  'close',
  'edit',
  'ellipsis',
  'search',
  'settings',
]
exports.iconSvgNames = iconSvgNames
//# sourceMappingURL=icon.js.map
