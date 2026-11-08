import { createWolfTheme, lightTheme } from '../../theme';
import { fieldBackground, fieldBorderColor, inputTextStyle } from './text-input-styles';

describe('fieldBorderColor', () => {
  it.each([
    [{ focused: false, invalid: false, disabled: false }, 'borderStrong'],
    [{ focused: true, invalid: false, disabled: false }, 'primary'],
    [{ focused: true, invalid: true, disabled: false }, 'danger'],
    [{ focused: false, invalid: true, disabled: false }, 'danger'],
    [{ focused: true, invalid: true, disabled: true }, 'border'],
  ])('%o -> %s', (state, expected) => {
    expect(fieldBorderColor(state)).toBe(expected);
  });
});

describe('fieldBackground', () => {
  it('fills a disabled field', () => {
    expect(fieldBackground(true)).toBe('surfaceMuted');
    expect(fieldBackground(false)).toBe('surface');
  });
});

describe('inputTextStyle', () => {
  it('uses the body variant over the defaults, and mutes disabled text', () => {
    const theme = createWolfTheme({ fontFamily: 'Inter' });
    expect(inputTextStyle(theme, false)).toMatchObject({
      color: theme.colors.text,
      fontSize: theme.textVariants.body.fontSize,
      fontFamily: 'Inter',
    });
    expect(inputTextStyle(lightTheme, true)).toMatchObject({
      color: lightTheme.colors.textDisabled,
    });
    expect(inputTextStyle(lightTheme, true)).not.toHaveProperty('fontFamily');
  });
});
