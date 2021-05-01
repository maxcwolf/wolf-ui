import { select } from '@storybook/addon-knobs'
import { theme, Color } from '@wolf-ui/theme'

export const colorSelect = (
  name: string = 'colors',
  initialValue: Color,
): Color =>
  select(
    name,
    Object.keys(theme.colors).map((key) => key.toString()),
    initialValue,
  )
