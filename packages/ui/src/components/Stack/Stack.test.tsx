import { lightTheme } from '../../theme';
import { render, screen } from '../../test-utils/render';
import { Stack } from './Stack';

describe('Stack', () => {
  it('is a column with the medium gap by default', async () => {
    await render(<Stack testID="stack" />);
    expect(screen.getByTestId('stack')).toHaveStyle({
      flexDirection: 'column',
      gap: lightTheme.spacing.m,
    });
  });

  it('lays out a row with any theme gap', async () => {
    await render(<Stack testID="stack" direction="row" gap="xl" />);
    expect(screen.getByTestId('stack')).toHaveStyle({
      flexDirection: 'row',
      gap: lightTheme.spacing.xl,
    });
  });
});
