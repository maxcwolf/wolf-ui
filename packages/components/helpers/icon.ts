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

export type IconType =
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

export const getIconComponent = (type?: IconType) => {
  switch (type) {
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
