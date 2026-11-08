import type { TextStyle } from 'react-native';
import type { ColorName, Theme } from '../../theme';

export interface FieldState {
  focused: boolean;
  invalid: boolean;
  disabled: boolean;
}

/** The outline color of the field. An error wins over focus, so it stays visible while typing. */
export function fieldBorderColor({ focused, invalid, disabled }: FieldState): ColorName {
  if (disabled) return 'border';
  if (invalid) return 'danger';
  return focused ? 'primary' : 'borderStrong';
}

export const fieldBackground = (disabled: boolean): ColorName =>
  disabled ? 'surfaceMuted' : 'surface';

/**
 * The style of the raw React Native input, from the `body` text variant. Restyle applies
 * `defaults` under every variant; a raw TextInput has to do the same.
 */
export function inputTextStyle(theme: Theme, disabled: boolean): TextStyle {
  const body = { ...theme.textVariants.defaults, ...theme.textVariants.body };
  return {
    flex: 1,
    paddingVertical: theme.spacing.s,
    color: theme.colors[disabled ? 'textDisabled' : 'text'],
    fontSize: body.fontSize,
    fontWeight: body.fontWeight,
    ...(body.fontFamily === undefined ? {} : { fontFamily: body.fontFamily }),
  };
}
