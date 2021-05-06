import { FC } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import FeatherIcon from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import OcticonIcon from 'react-native-vector-icons/Octicons'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import ZocialIcon from 'react-native-vector-icons/Zocial'
import entypoIcons from 'react-native-vector-icons/glyphmaps/Entypo.json'
import antDesignIcons from 'react-native-vector-icons/glyphmaps/AntDesign.json'
import evilIcons from 'react-native-vector-icons/glyphmaps/EvilIcons.json'
import featherIcons from 'react-native-vector-icons/glyphmaps/Feather.json'
import fontAwesomeIcons from 'react-native-vector-icons/glyphmaps/FontAwesome.json'
import octiconsIcons from 'react-native-vector-icons/glyphmaps/Octicons.json'
import zocialIcons from 'react-native-vector-icons/glyphmaps/Zocial.json'
import simpleIcons from 'react-native-vector-icons/glyphmaps/SimpleLineIcons.json'

import Icon from 'react-native-vector-icons/AntDesign'
import { IconSvg, IconSvgProps } from '../composite/Icon/IconSvg'

export const iconTypes: IconType[] = [
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

export type IconType =
  | 'svg'
  | 'ant-design'
  | 'entypo'
  | 'evilicon'
  | 'ionicon'
  | 'feather'
  | 'font-awesome'
  | 'fontisto'
  | 'foundation'
  | 'material'
  | 'material-community'
  | 'octicon'
  | 'simple-line-icon'
  | 'zocial'

export const getIconComponent = (
  type?: IconType,
): FC<IconSvgProps> | typeof Icon => {
  switch (type) {
    case 'svg':
      return IconSvg
    case 'ant-design':
      return AntDesign
    case 'evilicon':
      return EvilIcon
    case 'entypo':
      return EntypoIcon
    case 'feather':
      return FeatherIcon
    case 'fontisto':
      return Fontisto
    case 'foundation':
      return FoundationIcon
    case 'font-awesome':
      return FAIcon
    case 'ionicon':
      return Ionicon
    case 'material':
      return MaterialIcon
    case 'material-community':
      return MaterialCommunityIcon
    case 'octicon':
      return OcticonIcon
    case 'simple-line-icon':
      return SimpleLineIcon
    case 'zocial':
      return ZocialIcon
    default:
      return FAIcon
  }
}

export type IconSvgName =
  | 'add'
  | 'angle-up'
  | 'angle-down'
  | 'angle-right'
  | 'angle-left'
  | 'checkmark'
  | 'close'
  | 'edit'
  | 'ellipsis'
  | 'search'
  | 'settings'

export type IconVectorName =
  | keyof typeof entypoIcons // TODO: clear up and add icon names
  | keyof typeof antDesignIcons
  | keyof typeof evilIcons
  | keyof typeof featherIcons
  | keyof typeof octiconsIcons
  | keyof typeof zocialIcons
  | keyof typeof fontAwesomeIcons
  | keyof typeof simpleIcons

export const iconSvgNames: IconSvgName[] = [
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

export type IconName = IconSvgName | IconVectorName
