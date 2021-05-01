import { select } from '@storybook/addon-knobs'
import { theme, Color } from '@wolf-ui/theme'

export const colorSelect = (initialValue: Color): Color =>
  select(
    'colors',
    Object.keys(theme.colors).map((key) => key.toString()),
    initialValue,
  )