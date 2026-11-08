/** File templates for `yarn new:component`. Each output passes lint, types and the contracts. */

/** @param {string} name */
export const componentFile = (name) => `import { Box, Text } from '../../primitives';

export interface ${name}Props {
  /** The text the component shows. */
  label: string;
  testID?: string;
}

/** TODO: say in one sentence what ${name} is for. */
export function ${name}({ label, testID }: ${name}Props) {
  return (
    <Box
      padding="m"
      borderRadius="m"
      backgroundColor="surface"
      {...(testID === undefined ? {} : { testID })}
    >
      <Text variant="body">{label}</Text>
    </Box>
  );
}
`;

/** @param {string} name */
export const testFile = (name) => `import { darkTheme, lightTheme } from '../../theme';
import { render, screen } from '../../test-utils/render';
import { ${name} } from './${name}';

describe('${name}', () => {
  it('shows its label', async () => {
    await render(<${name} label="Hello" />);
    expect(screen.getByText('Hello')).toBeOnTheScreen();
  });

  it.each([
    ['light', lightTheme],
    ['dark', darkTheme],
  ] as const)('uses the %s theme', async (theme, expected) => {
    await render(<${name} label="Hello" testID="${name.toLowerCase()}" />, { theme });
    expect(screen.getByTestId('${name.toLowerCase()}')).toHaveStyle({
      backgroundColor: expected.colors.surface,
    });
  });
});
`;

/** @param {string} name */
export const storiesFile = (name) => `import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';

const meta = {
  title: 'Components/${name}',
  component: ${name},
  args: { label: '${name}' },
} satisfies Meta<typeof ${name}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
`;

/** @param {string} name */
export const indexFile = (name) => `export { ${name}, type ${name}Props } from './${name}';
`;

/** @param {string} name */
export const accessibilityFile = (name) => `# ${name}: accessibility spec

Pattern: TODO: link the matching [WAI-ARIA APG pattern](https://www.w3.org/WAI/ARIA/apg/patterns/),
or say there is none and what ${name} follows instead. Manual results:
[docs/assistive-technology-testing.md](../../../../../docs/assistive-technology-testing.md#${name.toLowerCase()}).

## Role, name and states

| Aspect | Web (React Native Web output) | iOS / Android (React Native props) |
| ------ | ----------------------------- | ---------------------------------- |
| Role   | TODO                          | TODO                               |
| Name   | TODO                          | TODO                               |
| States | TODO                          | TODO                               |

## Keyboard

| Key | Behaviour |
| --- | --------- |
| Tab | TODO      |

## Focus

TODO: whether ${name} takes focus, how focus is shown, and where focus goes after each action.

## Expected announcements

| Screen reader     | Must hear |
| ----------------- | --------- |
| VoiceOver (macOS) | TODO      |
| VoiceOver (iOS)   | TODO      |
| TalkBack          | TODO      |
| NVDA              | TODO      |

## Known issues

None known. List every gap from the pattern here instead of hiding it.
`;
