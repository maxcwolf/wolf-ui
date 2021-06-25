import React, { FC } from 'react'
import { ActivityIndicator, Box, PressableProps, Text } from '../../base'
import { Button } from '../../base/Button'
import { ButtonVariants, Color } from '../../theme'
import { Icon, IconName } from '../icon'
import { getAccentColor, getBaseColor } from './getColorUtils'
import { TypeProp } from './types'

export type ButtonMainProps = {
  children: string
  color: Color
  icon?: IconName | boolean
  loading: boolean
  type: TypeProp
  variant?: ButtonVariants
} & PressableProps

export const ButtonMain: FC<ButtonMainProps> = ({
  children,
  color = 'primary',
  icon = true,
  loading,
  type,
  variant = 'main',
  ...rest
}: ButtonMainProps) => {
  return (
    <Button
      bg={getBaseColor(type, color)}
      justifyContent="space-around"
      pointerEvents={loading ? 'none' : 'auto'}
      variant={variant}
      {...rest}
    >
      <Box flex={1} />
      {loading ? (
        <ActivityIndicator color={getAccentColor(type, color)} flex={1} />
      ) : (
        <Box flex={5} flexDirection="row" justifyContent="center">
          <Text
            color={getAccentColor(type, color)}
            numberOfLines={1}
            selectable={false}
            variant="buttonTextMain"
          >
            {children}
          </Text>
        </Box>
      )}
      <Box flex={1}>
        {icon && !loading && (
          <Icon
            isRounded
            bg={getAccentColor(type, color)}
            color={getBaseColor(type, color)}
            name={typeof icon === 'string' ? icon : 'arrow-right'}
            type="svg"
          />
        )}
      </Box>
    </Button>
  )
}
