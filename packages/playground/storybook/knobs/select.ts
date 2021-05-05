import { select } from '@storybook/addon-knobs'
import { theme, Color } from '@wolf-ui/theme'
import {
  IconType,
  IconName,
  iconTypes,
  IconSvgName,
  iconSvgNames,
} from '@wolf-ui/components'

export const colorSelect = (
  name: string = 'colors',
  initialValue: Color,
): Color =>
  select<Color>(
    name,
    Object.keys(theme.colors).map((key): any => key.toString()),
    initialValue,
  )

export const iconTypeSelect = (
  name: string = 'type',
  initialValue: IconType,
): IconType => select<IconType>(name, iconTypes, initialValue)

export const iconSvgNameSelect = (
  name: string = 'name',
  initialValue: IconSvgName,
): IconName => select<IconSvgName>(name, iconSvgNames, initialValue)
