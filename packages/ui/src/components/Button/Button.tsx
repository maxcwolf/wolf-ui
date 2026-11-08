import type { GestureResponderEvent } from 'react-native';
import { Pressable, Text } from '../../primitives';
import { useTheme, type ColorName } from '../../theme';
import { Icon, type IconName, type IconSize } from '../Icon';
import { Spinner } from '../Spinner';
import { buttonColors, buttonLayout, type ButtonSize, type ButtonVariant } from './button-styles';

export interface ButtonProps {
  /** The visible label, which is also the accessible name. */
  children: string;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  /** Shows a spinner and ignores presses, but keeps the label so the button keeps its name. */
  loading?: boolean;
  iconStart?: IconName;
  iconEnd?: IconName;
  /** Stretch to the width of the container. */
  fullWidth?: boolean;
  accessibilityHint?: string;
  testID?: string;
}

interface ContentProps {
  label: string;
  color: ColorName;
  iconSize: IconSize;
  loading: boolean;
  iconStart: IconName | undefined;
  iconEnd: IconName | undefined;
}

function ButtonContent({ label, color, iconSize, loading, iconStart, iconEnd }: ContentProps) {
  return (
    <>
      {loading ? (
        <Spinner color={color} accessibilityLabel="Loading" />
      ) : (
        iconStart && <Icon name={iconStart} size={iconSize} color={color} />
      )}
      {/* No numberOfLines: a label at 200% text size wraps instead of being cut off (1.4.4). */}
      <Text variant="button" color={color} textAlign="center" flexShrink={1}>
        {label}
      </Text>
      {iconEnd && <Icon name={iconEnd} size={iconSize} color={color} />}
    </>
  );
}

export function Button({
  children,
  onPress,
  variant = 'primary',
  size = 'm',
  disabled = false,
  loading = false,
  iconStart,
  iconEnd,
  fullWidth = false,
  ...rest
}: ButtonProps) {
  const theme = useTheme();
  const colors = buttonColors(variant, disabled);
  const layout = buttonLayout(size);
  const inactive = disabled || loading;
  return (
    <Pressable
      role="button"
      aria-disabled={inactive}
      // Only while loading: aria-busy=false is read out as "not busy" on every button.
      {...(loading ? { 'aria-busy': true } : {})}
      disabled={inactive}
      {...(onPress ? { onPress } : {})}
      hitSlop={layout.hitSlop}
      minHeight={layout.height}
      paddingHorizontal={layout.paddingX}
      gap={layout.gap}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      alignSelf={fullWidth ? 'stretch' : 'flex-start'}
      borderRadius="m"
      borderWidth={1}
      borderColor={colors.border}
      backgroundColor={colors.background}
      pressedStyle={{ backgroundColor: theme.colors[colors.pressedBackground] }}
      {...rest}
    >
      <ButtonContent
        label={children}
        color={colors.label}
        iconSize={layout.icon}
        loading={loading}
        iconStart={iconStart}
        iconEnd={iconEnd}
      />
    </Pressable>
  );
}
