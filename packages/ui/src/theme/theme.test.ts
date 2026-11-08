import { auditThemeContrast } from './contrast-audit';
import { darkTheme, lightTheme } from './theme';

/** Every key path in an object, so two themes can be compared by shape. */
function shape(value: unknown, prefix = ''): string[] {
  if (value === null || typeof value !== 'object') return [prefix];
  return Object.entries(value).flatMap(([key, child]) => shape(child, `${prefix}.${key}`));
}

describe.each([
  ['light', lightTheme],
  ['dark', darkTheme],
])('the %s theme', (_name, theme) => {
  it('meets WCAG 2.2 AA for every pairing the components use', () => {
    expect(auditThemeContrast(theme)).toEqual([]);
  });

  it('uses only theme color names in its text and card variants', () => {
    const variants: object[] = [
      ...Object.values(theme.textVariants),
      ...Object.values(theme.cardVariants),
    ];
    const used = variants.flatMap((variant) =>
      Object.entries(variant)
        .filter(([key]) => /color$/i.test(key))
        .map(([, value]) => value as unknown),
    );
    expect(used.length).toBeGreaterThan(0);
    expect(Object.keys(theme.colors)).toEqual(expect.arrayContaining(used));
  });
});

it('gives the light and dark themes the same shape, so either can replace the other', () => {
  expect(shape(darkTheme)).toEqual(shape(lightTheme));
});
