import { FC } from 'react'
import { IconType, IconName } from '../../helpers/icon'
export type { IconName }
export interface IconProps {
  name: IconName
  size?: number
  color?: string
  bg?: string
  type?: IconType
  onPress?: () => void
  onLongPress?: () => void
  isDisabled?: boolean
  isRounded?: boolean
  ratio?: number
}
/**
 * @todo Export all possible icon name values and types.
 */
export declare const Icon: FC<IconProps>
