import { contrastRatio, relativeLuminance } from './contrast';

describe('relativeLuminance', () => {
  it('is 0 for black and 1 for white', () => {
    expect(relativeLuminance('#000000')).toBe(0);
    expect(relativeLuminance('#FFFFFF')).toBe(1);
  });

  it('accepts lower-case hex', () => {
    expect(relativeLuminance('#ffffff')).toBe(1);
  });

  it.each(['#FFF', '#FFFFFF80', 'red', 'rgb(0,0,0)', ''])('rejects %p', (input) => {
    expect(() => relativeLuminance(input)).toThrow('Expected an opaque #RRGGBB color');
  });
});

describe('contrastRatio', () => {
  it('is 21 for black on white', () => {
    expect(contrastRatio('#000000', '#FFFFFF')).toBe(21);
  });

  it('is 1 for a color against itself', () => {
    expect(contrastRatio('#3563E9', '#3563E9')).toBe(1);
  });

  it('does not depend on argument order', () => {
    expect(contrastRatio('#3563E9', '#FFFFFF')).toBe(contrastRatio('#FFFFFF', '#3563E9'));
  });

  it('matches a known WCAG value (#777777 on white is about 4.48)', () => {
    expect(contrastRatio('#777777', '#FFFFFF')).toBeCloseTo(4.48, 2);
  });
});
