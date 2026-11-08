import { minTouchTarget } from '@maxcwolf/ui-tokens';
import type { ColorName, Spacing } from '../../theme';
import type { IconSize } from '../Icon';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 's' | 'm' | 'l';

export interface ButtonColors {
  background: ColorName;
  pressedBackground: ColorName;
  border: ColorName;
  label: ColorName;
}

const variantColors: Record<ButtonVariant, ButtonColors> = {
  primary: {
    background: 'primary',
    pressedBackground: 'primaryPressed',
    border: 'transparent',
    label: 'onPrimary',
  },
  secondary: {
    background: 'surface',
    pressedBackground: 'surfaceMuted',
    border: 'borderStrong',
    label: 'text',
  },
  ghost: {
    background: 'transparent',
    pressedBackground: 'primarySubtle',
    border: 'transparent',
    label: 'primary',
  },
  danger: {
    background: 'danger',
    pressedBackground: 'dangerPressed',
    border: 'transparent',
    label: 'onDanger',
  },
};

const disabledColors: ButtonColors = {
  background: 'surfaceMuted',
  pressedBackground: 'surfaceMuted',
  border: 'transparent',
  label: 'textDisabled',
};

/** The theme colors a button uses. Every pairing is in `contrastRequirements`. */
export function buttonColors(variant: ButtonVariant, disabled: boolean): ButtonColors {
  if (!disabled) return variantColors[variant];
  return variant === 'ghost' ? { ...disabledColors, background: 'transparent' } : disabledColors;
}

export interface ButtonLayout {
  height: number;
  paddingX: Spacing;
  gap: Spacing;
  icon: IconSize;
  /** Extra touch area so even a small button meets the minimum touch target. */
  hitSlop: number;
}

const heights: Record<ButtonSize, number> = { s: 36, m: 44, l: 52 };

export function buttonLayout(size: ButtonSize): ButtonLayout {
  const height = heights[size];
  return {
    height,
    paddingX: size === 's' ? 'm' : size === 'm' ? 'l' : 'xl',
    gap: size === 's' ? 'xs' : 's',
    icon: size === 'l' ? 'l' : 'm',
    hitSlop: Math.max(0, (minTouchTarget - height) / 2),
  };
}
