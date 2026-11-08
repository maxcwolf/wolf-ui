import { resolveTheme, type ThemeSet } from './resolve-theme';
import { createWolfTheme } from './create-theme';
import { darkTheme, lightTheme } from './theme';

const contrast = createWolfTheme({ colors: { text: '#000000' } });
const themes: ThemeSet = { light: lightTheme, dark: darkTheme, contrast };

describe('resolveTheme', () => {
  it.each([
    ['dark', 'dark'],
    ['light', 'light'],
    ['unspecified', 'light'],
    [null, 'light'],
    [undefined, 'light'],
  ] as const)('follows a %p device as %s for "system"', (system, expected) => {
    expect(resolveTheme(themes, 'system', system).name).toBe(expected);
  });

  it('uses a named theme whatever the device says', () => {
    expect(resolveTheme(themes, 'contrast', 'dark')).toEqual({ name: 'contrast', theme: contrast });
    expect(resolveTheme(themes, 'dark', 'light').theme).toBe(darkTheme);
  });

  it('names the available themes when asked for one it does not have', () => {
    expect(() => resolveTheme(themes, 'sepia', 'light')).toThrow(
      'Unknown theme "sepia". The ThemeProvider has: light, dark, contrast.',
    );
  });
});
