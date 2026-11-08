import { contrastRequirements, auditThemeContrast } from './contrast-audit';
import { createWolfTheme } from './create-theme';
import { lightTheme } from './theme';

describe('auditThemeContrast', () => {
  it('reports a pairing that falls under the minimum, with the measured ratio', () => {
    const theme = createWolfTheme({ colors: { textMuted: '#CCCCCC' } });
    const failures = auditThemeContrast(theme);
    const failure = failures.find(
      (f) => f.foreground === 'textMuted' && f.background === 'surface',
    );
    expect(typeof failure?.ratio).toBe('number');
    expect(failures.every((f) => f.ratio !== null && f.ratio < f.minimum)).toBe(true);
  });

  it('reports a color it cannot measure with a null ratio', () => {
    const theme = createWolfTheme({ colors: { text: 'rgb(0, 0, 0)' } });
    expect(auditThemeContrast(theme)).toContainEqual(
      expect.objectContaining({ foreground: 'text', ratio: null }),
    );
  });

  it('only names real theme colors', () => {
    const names = Object.keys(lightTheme.colors);
    for (const { foreground, background } of contrastRequirements) {
      expect(names).toEqual(expect.arrayContaining([foreground, background]));
    }
  });
});
