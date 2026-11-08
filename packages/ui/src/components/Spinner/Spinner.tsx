import { ActivityIndicator } from 'react-native';
import { useTheme, type ColorName } from '../../theme';

export interface SpinnerProps {
  size?: 'small' | 'large';
  color?: ColorName;
  /** Announced by screen readers. Defaults to "Loading". */
  accessibilityLabel?: string;
  testID?: string;
}

/** The platform activity indicator, in a theme color and always named for screen readers. */
export function Spinner({
  size = 'small',
  color = 'primary',
  accessibilityLabel = 'Loading',
  testID,
}: SpinnerProps) {
  const theme = useTheme();
  return (
    <ActivityIndicator
      accessible
      size={size}
      color={theme.colors[color]}
      role="progressbar"
      accessibilityLabel={accessibilityLabel}
      {...(testID ? { testID } : {})}
    />
  );
}
