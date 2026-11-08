import Svg, { Path } from 'react-native-svg';
import { Box } from '../../primitives';
import { useTheme, type ColorName } from '../../theme';
import { iconPaths, iconSizes, type IconName, type IconSize } from './icon-paths';

export interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: ColorName;
  /** Name the icon when it carries meaning. Without a label it is decorative and hidden. */
  accessibilityLabel?: string;
  testID?: string;
}

function a11yProps(label: string | undefined) {
  return label === undefined
    ? { 'aria-hidden': true, importantForAccessibility: 'no-hide-descendants' as const }
    : { accessible: true, role: 'img' as const, accessibilityLabel: label };
}

/** An SVG icon in a theme color. Works the same on iOS, Android and the web. */
export function Icon({ name, size = 'm', color = 'text', accessibilityLabel, testID }: IconProps) {
  const theme = useTheme();
  const px = iconSizes[size];
  return (
    <Box width={px} height={px} {...a11yProps(accessibilityLabel)} {...(testID ? { testID } : {})}>
      <Svg width={px} height={px} viewBox="0 0 24 24" fill="none">
        {iconPaths[name].map((d) => (
          <Path
            key={d}
            d={d}
            stroke={theme.colors[color]}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </Svg>
    </Box>
  );
}
