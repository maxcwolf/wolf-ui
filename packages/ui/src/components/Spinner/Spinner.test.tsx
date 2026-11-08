import { lightTheme } from '../../theme';
import { render, screen } from '../../test-utils/render';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('is a progress bar named "Loading" by default', async () => {
    await render(<Spinner />);
    expect(screen.getByRole('progressbar', { name: 'Loading' })).toBeOnTheScreen();
  });

  it('takes a custom name, size and theme color', async () => {
    await render(
      <Spinner accessibilityLabel="Saving" size="large" color="danger" testID="spinner" />,
    );
    const spinner = screen.getByRole('progressbar', { name: 'Saving' });
    expect(spinner).toHaveProp('size', 'large');
    expect(spinner).toHaveProp('color', lightTheme.colors.danger);
  });
});
