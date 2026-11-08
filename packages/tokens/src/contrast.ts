const HEX_COLOR = /^#[0-9a-f]{6}$/i;

function channel(hex: string, offset: number): number {
  const value = Number.parseInt(hex.slice(offset, offset + 2), 16) / 255;
  return value <= 0.039_28 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

/** WCAG 2 relative luminance of an opaque `#RRGGBB` color, from 0 (black) to 1 (white). */
export function relativeLuminance(hex: string): number {
  if (!HEX_COLOR.test(hex)) {
    throw new Error(`Expected an opaque #RRGGBB color, got "${hex}"`);
  }
  return 0.2126 * channel(hex, 1) + 0.7152 * channel(hex, 3) + 0.0722 * channel(hex, 5);
}

/** WCAG 2 contrast ratio of two opaque colors, from 1 to 21. The order does not matter. */
export function contrastRatio(a: string, b: string): number {
  const [lighter, darker] = [relativeLuminance(a), relativeLuminance(b)].sort((x, y) => y - x) as [
    number,
    number,
  ];
  return (lighter + 0.05) / (darker + 0.05);
}

/** WCAG 2.2 AA minimums: 4.5 for body text, 3 for large text and non-text UI (1.4.3, 1.4.11). */
export const minimumContrast = { text: 4.5, largeText: 3, ui: 3 } as const;
