/**
 * Whether a focus event should show the focus ring. On iOS and Android, focus only moves with a
 * keyboard, switch control or TV remote, so every focus is a visible one. The web version is in
 * focus-visible.web.ts (Metro and Vite pick the platform file).
 */
export function isFocusVisible(_event: unknown): boolean {
  return true;
}
