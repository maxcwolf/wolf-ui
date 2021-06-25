import React, { FC } from 'react'
import { Button } from '../../base/Button'
import { ActivityIndicator, PressableProps, Text } from '../../base'
import { getAccentColor, getBaseColor } from './getColorUtils'
import { TypeProp } from './types'
import { Color } from '../../theme'

export type ButtonInnerProps = {
  accessibilityLabel?: string
  children: string
  color: Color
  loading: boolean
  type: TypeProp
} & PressableProps

export const ButtonInner: FC<ButtonInnerProps> = ({
  children,
  color = 'primary',
  loading,
  type,
  ...rest
}: ButtonInnerProps) => (
  <Button
    bg={getBaseColor(type, color)}
    borderColor={getAccentColor(type, color)}
    pointerEvents={loading ? 'none' : 'auto'}
    variant="inner"
    {...rest}
  >
    {loading ? (
      <ActivityIndicator color={getAccentColor(type, color)} flex={1} height={10} />
    ) : (
      <Text
        color={getAccentColor(type, color)}
        numberOfLines={1}
        selectable={false}
        variant="buttonTextInner"
      >
        {children}
      </Text>
    )}
  </Button>
)
