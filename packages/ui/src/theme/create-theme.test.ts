import { createWolfTheme } from './create-theme';
import { darkTheme, lightTheme } from './theme';

describe('createWolfTheme', () => {
  it('returns the base theme unchanged when there is nothing to override', () => {
    expect(createWolfTheme({})).toEqual(lightTheme);
    expect(createWolfTheme({}, darkTheme)).toEqual(darkTheme);
  });

  it('overrides only the values given', () => {
    const theme = createWolfTheme({
      colors: { primary: '#6D28D9' },
      spacing: { m: 14 },
      borderRadii: { m: 2 },
    });
    expect(theme.colors.primary).toBe('#6D28D9');
    expect(theme.colors.text).toBe(lightTheme.colors.text);
    expect(theme.spacing).toEqual({ ...lightTheme.spacing, m: 14 });
    expect(theme.borderRadii.m).toBe(2);
  });

  it('merges variant overrides into the base variant', () => {
    const theme = createWolfTheme({
      textVariants: { heading1: { fontSize: 40 } },
      cardVariants: { outlined: { borderWidth: 2 } },
    });
    expect(theme.textVariants.heading1).toEqual({
      ...lightTheme.textVariants.heading1,
      fontSize: 40,
    });
    expect(theme.cardVariants.outlined).toEqual({
      ...lightTheme.cardVariants.outlined,
      borderWidth: 2,
    });
  });

  it('sets one font family for every text variant', () => {
    const theme = createWolfTheme({ fontFamily: 'Inter' });
    expect(theme.textVariants.defaults).toEqual({
      ...lightTheme.textVariants.defaults,
      fontFamily: 'Inter',
    });
  });

  it('never mutates the base theme', () => {
    const before = JSON.stringify(lightTheme);
    createWolfTheme({
      colors: { primary: '#000000' },
      fontFamily: 'Inter',
      textVariants: { body: { fontSize: 1 } },
    });
    expect(JSON.stringify(lightTheme)).toBe(before);
  });
});
