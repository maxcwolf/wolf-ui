import { FC } from 'react'
import entypoIcons from 'react-native-vector-icons/glyphmaps/Entypo.json'
import antDesignIcons from 'react-native-vector-icons/glyphmaps/AntDesign.json'
import evilIcons from 'react-native-vector-icons/glyphmaps/EvilIcons.json'
import featherIcons from 'react-native-vector-icons/glyphmaps/Feather.json'
import fontAwesomeIcons from 'react-native-vector-icons/glyphmaps/FontAwesome.json'
import octiconsIcons from 'react-native-vector-icons/glyphmaps/Octicons.json'
import zocialIcons from 'react-native-vector-icons/glyphmaps/Zocial.json'
import simpleIcons from 'react-native-vector-icons/glyphmaps/SimpleLineIcons.json'
import Icon from 'react-native-vector-icons/AntDesign'
import { IconSvgProps } from '../composite/icon/IconSvg'
export declare const iconTypes: IconType[]
export declare type IconType =
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
export declare const getIconComponent: (
  type?: IconType | undefined
) => FC<IconSvgProps> | typeof Icon
export declare type IconSvgName =
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
export declare type IconVectorName =
  | keyof typeof entypoIcons
  | keyof typeof antDesignIcons
  | keyof typeof evilIcons
  | keyof typeof featherIcons
  | keyof typeof octiconsIcons
  | keyof typeof zocialIcons
  | keyof typeof fontAwesomeIcons
  | keyof typeof simpleIcons
export declare const iconSvgNames: IconSvgName[]
export declare type IconName = IconSvgName | IconVectorName
