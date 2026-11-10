import type { Ref } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Pressable, Text, type PressableRef } from '../../primitives';
import { useTheme, type ColorName } from '../../theme';
import { Icon, type IconName, type IconSize } from '../Icon';
import { Spinner } from '../Spinner';
import {
  buttonColors,
  buttonLayout,
  buttonState,
  type ButtonSize,
  type ButtonVariant,
} from './button-styles';

/** What a `ref` on a `Button` points at: the host view. */
export type ButtonRef = PressableRef;

interface CommonProps {
  onPress?: (event: GestureResponderEvent) => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  /** Shows a spinner and ignores presses, but keeps the label so the button keeps its name. */
  loading?: boolean;
  /** The spinner's accessible name while loading, for translation. Defaults to "Loading". */
  loadingLabel?: string;
  /** Stretch to the width of the container. */
  fullWidth?: boolean;
  accessibilityHint?: string;
  testID?: string;
  ref?: Ref<ButtonRef>;
}

interface LabelledProps extends CommonProps {
  /** The visible label, which is also the accessible name. */
  children: string;
  iconStart?: IconName;
  iconEnd?: IconName;
  icon?: never;
  accessibilityLabel?: never;
}

interface IconOnlyProps extends CommonProps {
  /** The only content of the button. It has no visible label, so it needs a name. */
  icon: IconName;
  /** The accessible name: say what the button does ("Close"), not what the icon shows. */
  accessibilityLabel: string;
  children?: never;
  iconStart?: never;
  iconEnd?: never;
}

/** A button has a visible label, or an `icon` and an `accessibilityLabel`. Never neither. */
export type ButtonProps = LabelledProps | IconOnlyProps;

interface ContentProps {
  label: string | undefined;
  color: ColorName;
  iconSize: IconSize;
  /** The spinner's name while loading; `undefined` when not loading. */
  loadingLabel: string | undefined;
  iconStart: IconName | undefined;
  iconEnd: IconName | undefined;
}

function ButtonContent({ label, color, iconSize, loadingLabel, iconStart, iconEnd }: ContentProps) {
  return (
    <>
      {loadingLabel === undefined ? (
        iconStart && <Icon name={iconStart} size={iconSize} color={color} />
      ) : (
        <Spinner color={color} accessibilityLabel={loadingLabel} />
      )}
      {/* No numberOfLines: a label at 200% text size wraps instead of being cut off (1.4.4). */}
      {label !== undefined && (
        <Text variant="button" color={color} textAlign="center" flexShrink={1}>
          {label}
        </Text>
      )}
      {iconEnd && <Icon name={iconEnd} size={iconSize} color={color} />}
    </>
  );
}

export function Button({
  children,
  icon,
  iconStart,
  iconEnd,
  accessibilityLabel,
  onPress,
  variant = 'primary',
  size = 'm',
  disabled = false,
  loading = false,
  loadingLabel = 'Loading',
  fullWidth = false,
  ...rest
}: ButtonProps) {
  const theme = useTheme();
  const colors = buttonColors(variant, disabled);
  const layout = buttonLayout(size, icon !== undefined);
  return (
    <Pressable
      role="button"
      accessibilityLabel={accessibilityLabel}
      {...buttonState(disabled, loading)}
      onPress={onPress}
      hitSlop={layout.hitSlop}
      minHeight={layout.height}
      minWidth={layout.minWidth}
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
        loadingLabel={loading ? loadingLabel : undefined}
        iconStart={icon ?? iconStart}
        iconEnd={iconEnd}
      />
    </Pressable>
  );
}
