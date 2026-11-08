import { relativeLuminance } from './contrast';
import { palette } from './palette';
import { fontSizes, lineHeights, radii, spacing } from './scales';

const ascending = (values: readonly number[]) =>
  values.every((value, i) => i === 0 || value > (values[i - 1] ?? -Infinity));

describe('scales', () => {
  it.each([
    ['spacing', spacing],
    ['radii', radii],
    ['fontSizes', fontSizes],
    ['lineHeights', lineHeights],
  ])('%s ascend strictly, so a later key is always bigger', (_name, scale) => {
    expect(ascending(Object.values(scale))).toBe(true);
  });

  it('gives every font size a line height at least as tall as the text', () => {
    for (const [size, px] of Object.entries(fontSizes)) {
      expect(lineHeights[size as keyof typeof lineHeights]).toBeGreaterThanOrEqual(px);
    }
  });
});

describe('palette', () => {
  it('holds only opaque #RRGGBB values', () => {
    for (const value of Object.values(palette)) {
      expect(value).toMatch(/^#[0-9A-F]{6}$/);
    }
  });

  it('gets darker at every step of each ramp', () => {
    const ramps = ['gray', 'blue', 'red', 'green', 'amber'] as const;
    const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
    for (const ramp of ramps) {
      const luminance = steps.map((step) => relativeLuminance(palette[`${ramp}${step}`]));
      expect(luminance.every((l, i) => i === 0 || l < (luminance[i - 1] ?? Infinity))).toBe(true);
    }
  });
});
