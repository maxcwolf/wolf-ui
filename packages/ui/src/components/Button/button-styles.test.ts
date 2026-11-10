import { minTouchTarget } from '@maxcwolf/ui-tokens';
import {
  buttonColors,
  buttonLayout,
  buttonState,
  type ButtonSize,
  type ButtonVariant,
} from './button-styles';

const variants: ButtonVariant[] = ['primary', 'secondary', 'ghost', 'danger'];
const sizes: ButtonSize[] = ['s', 'm', 'l'];

describe('buttonColors', () => {
  it.each(variants)('gives %s a distinct pressed background', (variant) => {
    const colors = buttonColors(variant, false);
    expect(colors.pressedBackground).not.toBe(colors.background);
  });

  it.each(variants)('mutes %s when disabled', (variant) => {
    expect(buttonColors(variant, true).label).toBe('textDisabled');
  });

  it('keeps a disabled ghost button transparent', () => {
    expect(buttonColors('ghost', true).background).toBe('transparent');
    expect(buttonColors('primary', true).background).toBe('surfaceMuted');
  });
});

describe('buttonLayout', () => {
  it.each(sizes)('reaches the minimum touch target at size %s', (size) => {
    const { height, hitSlop } = buttonLayout(size);
    expect(height + hitSlop * 2).toBeGreaterThanOrEqual(minTouchTarget);
  });

  it('grows with the size', () => {
    const heights = sizes.map((size) => buttonLayout(size).height);
    expect(heights).toEqual([...heights].sort((a, b) => a - b));
    expect(buttonLayout('s')).toMatchObject({ paddingX: 'm', gap: 'xs', icon: 'm' });
    expect(buttonLayout('l')).toMatchObject({ paddingX: 'xl', gap: 's', icon: 'l', hitSlop: 0 });
  });
});

describe('buttonLayout for an icon-only button', () => {
  it.each(sizes)('is a square that reaches the minimum touch target at size %s', (size) => {
    const { height, minWidth, paddingX, hitSlop } = buttonLayout(size, true);
    expect(minWidth).toBe(height);
    expect(paddingX).toBe('none');
    expect(minWidth + hitSlop * 2).toBeGreaterThanOrEqual(minTouchTarget);
  });

  it('sets no minimum width on a labelled button', () => {
    expect(buttonLayout('m').minWidth).toBe(0);
  });
});

describe('buttonState', () => {
  it('reports nothing extra on an active button, so no reader says "not busy"', () => {
    expect(buttonState(false, false)).toEqual({ disabled: false, 'aria-disabled': false });
  });

  it('is disabled when disabled', () => {
    expect(buttonState(true, false)).toEqual({ disabled: true, 'aria-disabled': true });
  });

  it('is busy and ignores presses while loading', () => {
    expect(buttonState(false, true)).toEqual({
      disabled: true,
      'aria-disabled': true,
      'aria-busy': true,
    });
  });
});
