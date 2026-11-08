interface FocusEventLike {
  nativeEvent?: { target?: unknown };
  target?: unknown;
}

const isElement = (value: unknown): value is { matches: (selector: string) => boolean } =>
  typeof value === 'object' &&
  value !== null &&
  'matches' in value &&
  typeof value.matches === 'function';

/** On the web, show the ring only when the browser would (keyboard focus, not a mouse click). */
export function isFocusVisible(event: unknown): boolean {
  const { nativeEvent, target } = (event ?? {}) as FocusEventLike;
  const element = nativeEvent?.target ?? target;
  return isElement(element) ? element.matches(':focus-visible') : true;
}
