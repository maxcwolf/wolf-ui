import { createText } from '@shopify/restyle';
import type { ComponentProps } from 'react';
import type { TextVariant, Theme } from '../theme';

const RestyleText = createText<Theme>();

/** Size, weight, family and rhythm come from the variant, never from one-off props (ADR 0005). */
type TypographyOverride = 'fontSize' | 'fontWeight' | 'fontFamily' | 'lineHeight' | 'letterSpacing';

export type TextProps = Omit<ComponentProps<typeof RestyleText>, 'variant' | TypographyOverride> & {
  variant: TextVariant;
};

/** Themed text. `variant` is required, so every string in the UI sits on the type scale. */
export function Text(props: TextProps) {
  return <RestyleText allowFontScaling maxFontSizeMultiplier={2} {...props} />;
}
