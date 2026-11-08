import { createBox } from '@shopify/restyle';
import type { ComponentProps } from 'react';
import type { Theme } from '../theme';

/** A themed `View`: every layout, spacing, color, border and shadow prop takes a theme key. */
export const Box = createBox<Theme>();

export type BoxProps = ComponentProps<typeof Box>;
