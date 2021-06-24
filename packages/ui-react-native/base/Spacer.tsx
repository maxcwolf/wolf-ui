import React, { FC } from 'react'
import { View } from 'react-native'
import { useTheme } from '@shopify/restyle'
import { Theme, Spacing } from '../theme'

export interface SpacerProps {
  size?: Spacing
  backgroundColor?: string
}

export const Spacer: FC<SpacerProps> = ({ size = 'm', backgroundColor = 'transparent' }) => {
  const theme = useTheme<Theme>()
  return <View style={{ height: theme.spacing[size], backgroundColor }} />
}
