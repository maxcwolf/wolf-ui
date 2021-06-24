import { select } from '@storybook/addon-knobs'
import {
  themeDxm as theme,
  Color,
  Spacing,
  TextVariants,
  CardVariants,
} from '@maxcwolf/ui-react-native'
import { IconType, IconName, iconTypes, IconSvgName, iconSvgNames } from '@maxcwolf/ui-react-native'

export const colorSelect = (name: string, initialValue: Color): Color =>
  select<Color>(
    name,
    Object.keys(theme.colors).map((key): any => key.toString()),
    initialValue
  )

export const iconTypeSelect = (initialValue: IconType): IconType =>
  select<IconType>('type', iconTypes, initialValue)

export const iconSvgNameSelect = (initialValue: IconSvgName): IconName =>
  select<IconSvgName>('name', iconSvgNames, initialValue)

export const spacingSelect = (name: string, initialValue: Spacing): Spacing =>
  select<Spacing>(
    name,
    Object.keys(theme.spacing).map((key): any => key.toString()),
    initialValue
  )

export const textVariantSelect = (initialValue: TextVariants): TextVariants =>
  select<TextVariants>(
    'variant',
    Object.keys(theme.textVariants).map((key): any => key.toString()),
    initialValue
  )

export const cardVariantSelect = (initialValue: CardVariants): CardVariants =>
  select<CardVariants>(
    'variant',
    Object.keys(theme.cardVariants).map((key): any => key.toString()),
    initialValue
  )
