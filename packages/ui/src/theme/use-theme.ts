// The one place restyle's useTheme is imported (lint no-restricted-imports, ADR 0005).
import { useTheme as useRestyleTheme } from '@shopify/restyle';
import type { Theme } from './theme';

/** The active theme, typed. Prefer restyle props on primitives; use this for non-style values. */
export const useTheme = (): Theme => useRestyleTheme<Theme>();
