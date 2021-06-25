import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../../theme'
import { getIconComponent, IconType, IconName } from '../../helpers/icon'
import { Flex } from '../../base'
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

export const Icon: FC<IconProps> = props => {
  const theme = useTheme<Theme>()

  const {
    type,
    name,
    size = theme.borderRadii.icon * 2,
    color = theme.colors.black,
    bg = theme.colors.transparent,
    onPress,
    onLongPress,
    isDisabled = false,
    isRounded = false,
    ratio = 1.5,
  } = props

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors[bg],
      width: size * ratio,
      height: size * ratio,
      justifyContent: 'center',
      alignItems: 'center',
    },
    touchable: {
      width: size * ratio,
      height: size * ratio,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rounded: {
      borderRadius: (size * ratio) / 2,
    },
    disabled: {
      opacity: 0.3,
    },
  })

  const IconComponent = getIconComponent(type)
  return (
    <Flex style={[styles.container, isRounded && styles.rounded, isDisabled && styles.disabled]}>
      {onPress ? (
        <TouchableOpacity
          {...{
            onPress,
            onLongPress,
            isDisabled,
          }}
          style={[styles.touchable, isRounded && styles.rounded]}
        >
          <IconComponent
            {...{
              name,
              size,
              color: theme.colors[color],
            }}
          />
        </TouchableOpacity>
      ) : (
        <IconComponent
          {...{
            name,
            size,
            color: theme.colors[color],
          }}
        />
      )}
    </Flex>
  )
}
