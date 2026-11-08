import { contrastRatio, minimumContrast } from '@maxcwolf/ui-tokens';
import type { ColorName } from './colors';
import type { Theme } from './theme';

interface ContrastRequirement {
  foreground: ColorName;
  background: ColorName;
  minimum: number;
}

const text = (foreground: ColorName, backgrounds: ColorName[]): ContrastRequirement[] =>
  backgrounds.map((background) => ({ foreground, background, minimum: minimumContrast.text }));

/** Every pairing the components render. A new pairing in a component belongs here. */
export const contrastRequirements: readonly ContrastRequirement[] = [
  ...text('text', ['background', 'surface', 'surfaceMuted']),
  ...text('textMuted', ['background', 'surface']),
  ...text('primary', ['background', 'surface']),
  ...text('danger', ['background', 'surface']),
  ...text('success', ['surface']),
  ...text('warning', ['surface']),
  ...text('onPrimary', ['primary', 'primaryPressed']),
  ...text('onDanger', ['danger', 'dangerPressed']),
  ...text('primary', ['primarySubtle']),
  ...text('danger', ['dangerSubtle']),
  { foreground: 'borderStrong', background: 'surface', minimum: minimumContrast.ui },
  { foreground: 'focusRing', background: 'background', minimum: minimumContrast.ui },
];

export interface ContrastFailure extends ContrastRequirement {
  /** The measured ratio, or `null` when a color is not an opaque `#RRGGBB` value. */
  ratio: number | null;
}

function measure(theme: Theme, requirement: ContrastRequirement): number | null {
  try {
    return contrastRatio(
      theme.colors[requirement.foreground],
      theme.colors[requirement.background],
    );
  } catch {
    return null;
  }
}

/**
 * Checks a theme against WCAG 2.2 AA for every color pairing the components use. Returns the
 * failures, so `expect(auditThemeContrast(myTheme)).toEqual([])` guards a custom theme.
 */
export function auditThemeContrast(theme: Theme): ContrastFailure[] {
  return contrastRequirements.flatMap((requirement) => {
    const ratio = measure(theme, requirement);
    return ratio !== null && ratio >= requirement.minimum ? [] : [{ ...requirement, ratio }];
  });
}
