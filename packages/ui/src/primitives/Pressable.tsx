import {
  boxRestyleFunctions,
  composeRestyleFunctions,
  useRestyle,
  type BoxProps as RestyleBoxProps,
} from '@shopify/restyle';
import { useState, type ComponentRef, type ReactNode, type Ref } from 'react';
import {
  Pressable as RNPressable,
  type PressableProps as RNPressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { useTheme, type Theme } from '../theme';
import { isFocusVisible } from './focus-visible';

const restyleFunctions = composeRestyleFunctions<Theme, RestyleBoxProps<Theme>>(
  boxRestyleFunctions,
);

/** What a `ref` on a `Pressable` (or a `Button`) points at: the host view. */
export type PressableRef = ComponentRef<typeof RNPressable>;

export type PressableProps = RestyleBoxProps<Theme> &
  Omit<RNPressableProps, 'style' | 'children' | 'ref'> & {
    children?: ReactNode;
    ref?: Ref<PressableRef>;
    style?: StyleProp<ViewStyle>;
    /** Applied on top of `style` while pressed. Defaults to a dimmed opacity. */
    pressedStyle?: StyleProp<ViewStyle>;
  };

const defaultPressedStyle: ViewStyle = { opacity: 0.7 };

/**
 * A themed `Pressable`: Box props, a pressed style, presses switched off when disabled, and a
 * focus ring in the theme's `focusRing` color for keyboard focus (WCAG 2.4.7).
 */
export function Pressable({
  pressedStyle = defaultPressedStyle,
  onFocus,
  onBlur,
  ...props
}: PressableProps) {
  const theme = useTheme();
  const [focusVisible, setFocusVisible] = useState(false);
  const { style, disabled, ...rest } = useRestyle(restyleFunctions, props);
  const focusRing: ViewStyle = {
    outlineColor: theme.colors.focusRing,
    outlineStyle: 'solid',
    outlineWidth: 2,
    outlineOffset: 2,
  };
  return (
    <RNPressable
      disabled={disabled}
      onFocus={(event) => {
        setFocusVisible(isFocusVisible(event));
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setFocusVisible(false);
        onBlur?.(event);
      }}
      style={({ pressed }) => [
        style,
        pressed && !disabled ? pressedStyle : null,
        focusVisible ? focusRing : null,
      ]}
      {...rest}
    />
  );
}
