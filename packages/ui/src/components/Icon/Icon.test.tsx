import { darkTheme, lightTheme } from '../../theme';
import { render, screen } from '../../test-utils/render';
import { Icon } from './Icon';
import { iconNames, iconPaths } from './icon-paths';

describe('Icon', () => {
  it('is hidden from assistive technology when it has no label', async () => {
    await render(<Icon name="check" testID="icon" />);
    expect(screen.getByTestId('icon', { includeHiddenElements: true })).not.toBeVisible();
    expect(screen.queryByRole('img')).toBeNull();
  });

  it('is an image with a name when it has a label', async () => {
    await render(<Icon name="alert" accessibilityLabel="Warning" />);
    expect(screen.getByRole('img', { name: 'Warning' })).toBeOnTheScreen();
  });

  it.each([
    ['s', 16],
    ['m', 20],
    ['l', 24],
  ] as const)('renders size %s at %ipx', async (size, px) => {
    await render(<Icon name="plus" size={size} accessibilityLabel="Add" testID="icon" />);
    expect(screen.getByTestId('icon')).toHaveStyle({ width: px, height: px });
  });

  it.each([
    ['light', lightTheme],
    ['dark', darkTheme],
  ] as const)('strokes in the %s theme color', async (theme, expected) => {
    const { toJSON } = await render(<Icon name="check" color="primary" />, { theme });
    // react-native-svg hands native code the color as an opaque ARGB integer.
    const argb = Number.parseInt(`FF${expected.colors.primary.slice(1)}`, 16);
    expect(JSON.stringify(toJSON())).toContain(`"stroke":{"type":0,"payload":${argb}}`);
  });

  it('has a path for every name', () => {
    for (const name of iconNames) {
      expect(iconPaths[name].length).toBeGreaterThan(0);
    }
  });
});
