import { lightTheme } from '../theme';
import { render, screen } from '../test-utils/render';
import { Text } from './Text';

describe('Text', () => {
  it('takes its size, weight and color from the variant', async () => {
    await render(<Text variant="heading1">Title</Text>);
    const { fontSize, lineHeight, fontWeight } = lightTheme.textVariants.heading1;
    expect(screen.getByText('Title')).toHaveStyle({
      fontSize,
      lineHeight,
      fontWeight,
      color: lightTheme.colors.text,
    });
  });

  it('lets a theme color override the variant color', async () => {
    await render(
      <Text variant="caption" color="danger">
        Error
      </Text>,
    );
    expect(screen.getByText('Error')).toHaveStyle({ color: lightTheme.colors.danger });
  });

  it('scales with the system font size, up to double', async () => {
    await render(<Text variant="body">Body</Text>);
    expect(screen.getByText('Body')).toHaveProp('maxFontSizeMultiplier', 2);
  });
});
