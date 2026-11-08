import { createRestyleComponent, createVariant, type VariantProps } from '@shopify/restyle';
import type { ComponentProps } from 'react';
import { Box } from '../../primitives';
import type { CardVariant, Theme } from '../../theme';

const RestyleCard = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: 'cardVariants' })], Box);

export type CardProps = Omit<ComponentProps<typeof RestyleCard>, 'variant'> & {
  variant?: CardVariant;
};

/** A surface for grouped content. The variants come from the theme's `cardVariants`. */
export function Card({ variant = 'elevated', ...rest }: CardProps) {
  return <RestyleCard variant={variant} {...rest} />;
}
