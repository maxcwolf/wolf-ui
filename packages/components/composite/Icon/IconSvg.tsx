import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'
import { Color } from '@wolf-ui/theme'
import { IconSvgName } from '../../helpers'
import { Box } from '../../base'

const Add = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M31 19.7969C31 19.2446 30.5523 18.7969 30 18.7969H21.2318V10C21.2318 9.44772 20.7841 9 20.2318 9H19.7682C19.2159 9 18.7682 9.44772 18.7682 10V18.7969H10C9.44772 18.7969 9 19.2446 9 19.7969V20.2318C9 20.7841 9.44772 21.2318 10 21.2318H18.7682V30C18.7682 30.5523 19.2159 31 19.7682 31H20.2318C20.7841 31 21.2318 30.5523 21.2318 30V21.2318H30C30.5523 21.2318 31 20.7841 31 20.2318V19.7969Z"
      fill={color}
    />
  </Svg>
)

const AngleLeft = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M26.6568 8.99121C27.0652 9.3867 27.0622 10.0427 26.6501 10.4344L16.6014 19.9859L26.63 29.5432C27.0389 29.9329 27.0441 30.5837 26.6415 30.9799L26.2952 31.3207C25.9105 31.6993 25.2946 31.7042 24.9039 31.3318L13.7612 20.7115C13.3471 20.3168 13.3479 19.6559 13.7629 19.2621L24.9377 8.6597C25.3264 8.29092 25.9367 8.29401 26.3216 8.66672L26.6568 8.99121Z"
      fill={color}
    />
  </Svg>
)

const AngleUp = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M31.098 26.245a1 1 0 01-1.447-.007l-9.495-10.042-9.5 10.022a1 1 0 01-1.441.012l-.335-.342a1 1 0 01-.011-1.388l10.56-11.138a1 1 0 011.453.001l10.542 11.171a1 1 0 01-.007 1.38l-.319.331z"
      fill={color}
    />
  </Svg>
)

const AngleRight = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24.8744 13.6773C24.4843 13.3005 23.865 13.3032 23.4784 13.6836L23.337 13.8226C22.9347 14.2183 22.9393 14.8683 23.3471 15.2583L26.7237 18.4871H10C9.44772 18.4871 9 18.9348 9 19.4871V19.7026C9 20.2549 9.44772 20.7026 10 20.7026H26.7237L23.3471 23.9314C22.9393 24.3214 22.9347 24.9714 23.337 25.3671L23.4784 25.5061C23.865 25.8864 24.4843 25.8892 24.8744 25.5124L30.2555 20.3141C30.6624 19.9209 30.6624 19.2688 30.2555 18.8756L24.8744 13.6773Z"
      fill={color}
    />
  </Svg>
)

const AngleDown = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 40 30" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M30.883 9.97a1 1 0 00-1.224.005l-9.497 7.418-9.501-7.403a1 1 0 00-1.217-.01l-.064.049a1 1 0 00-.012 1.587l10.179 7.929a1 1 0 001.23-.002l10.165-7.954a1 1 0 00-.008-1.58l-.05-.04z"
      fill={color}
    />
  </Svg>
)

const getSvg = (name: IconSvgName | string) => {
  switch (name) {
    case 'add':
      return Add
    case 'angle-up':
      return AngleUp
    case 'angle-down':
      return AngleDown
    case 'angle-right':
      return AngleRight
    case 'angle-left':
      return AngleLeft
    default:
      return Add
  }
}

export interface IconSvgProps {
  name: string
  size?: number
  color?: Color
}

export const IconSvg: FC<IconSvgProps> = ({
  name,
  size = 40,
  color = 'black',
}) => {
  const SvgComponent = getSvg(name)

  return (
    <Box width={size} height={size}>
      <SvgComponent size={size} color={color} />
    </Box>
  )
}
