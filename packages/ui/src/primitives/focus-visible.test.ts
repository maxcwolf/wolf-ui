import { isFocusVisible as native } from './focus-visible';
import { isFocusVisible as web } from './focus-visible.web';

const element = (focusVisible: boolean) => ({
  matches: (s: string) => s === ':focus-visible' && focusVisible,
});

describe('isFocusVisible', () => {
  it('always shows the ring on native platforms', () => {
    expect(native({})).toBe(true);
  });

  it('follows :focus-visible on the web', () => {
    expect(web({ nativeEvent: { target: element(true) } })).toBe(true);
    expect(web({ nativeEvent: { target: element(false) } })).toBe(false);
    expect(web({ target: element(false) })).toBe(false);
  });

  it('shows the ring when it cannot tell', () => {
    expect(web(undefined)).toBe(true);
    expect(web({ nativeEvent: { target: {} } })).toBe(true);
  });
});
