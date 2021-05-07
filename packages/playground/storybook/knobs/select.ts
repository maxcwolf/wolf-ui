import { select } from '@storybook/addon-knobs'
import { theme, Color, Spacing } from '@wolf-ui/theme'
import {
  IconType,
  IconName,
  iconTypes,
  IconSvgName,
  iconSvgNames,
} from '@wolf-ui/components'

export const colorSelect = (name: string, initialValue: Color): Color => {
  const color = select<Color>(
    name,
    Object.keys(theme.colors).map((key): any => key.toString()),
    initialValue,
  )

  console.log('color: ', color, '; typeof color: ', typeof color)

  return color
}

export const iconTypeSelect = (initialValue: IconType): IconType =>
  select<IconType>('type', iconTypes, initialValue)

export const iconSvgNameSelect = (initialValue: IconSvgName): IconName =>
  select<IconSvgName>('name', iconSvgNames, initialValue)

export const spacingSelect = (name: string, initialValue: Spacing): Spacing =>
  select<Spacing>(
    name,
    Object.keys(theme.spacing).map((key): any => key.toString()),
    initialValue,
  )
