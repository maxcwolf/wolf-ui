import {
  render as rtlRender,
  type RenderOptions,
  type RenderResult,
} from '@testing-library/react-native';
import type { ReactElement } from 'react';
import { ThemeProvider, type ColorMode, type ThemeSet } from '../theme';

interface Options extends Omit<RenderOptions, 'wrapper'> {
  /** The theme to render under. Defaults to `'light'`, so a test never depends on the device. */
  theme?: ColorMode;
  themes?: ThemeSet;
}

/** Renders inside the wolf-ui ThemeProvider. Tests import this, never RNTL's render (lint). */
export function render(
  ui: ReactElement,
  { theme = 'light', themes, ...options }: Options = {},
): Promise<RenderResult> {
  return rtlRender(ui, {
    ...options,
    wrapper: ({ children }) => (
      <ThemeProvider mode={theme} {...(themes ? { themes } : {})}>
        {children}
      </ThemeProvider>
    ),
  });
}

export { fireEvent, screen, userEvent } from '@testing-library/react-native';

/** The flattened style of a host element, for asserting one style value. */
export function flatStyle(element: { props: { style?: unknown } }): Record<string, unknown> {
  const flatten = (style: unknown): Record<string, unknown> => {
    if (Array.isArray(style))
      return Object.assign({}, ...style.map(flatten)) as Record<string, unknown>;
    return style && typeof style === 'object' ? (style as Record<string, unknown>) : {};
  };
  return flatten(element.props.style);
}
