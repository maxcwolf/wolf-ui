import { minTouchTarget } from '@maxcwolf/ui-tokens';
import { useId, useState } from 'react';
import {
  TextInput as RNTextInput,
  type NativeSyntheticEvent,
  type TargetedEvent,
  type TextInputProps as RNTextInputProps,
} from 'react-native';
import { Box, Text } from '../../primitives';
import { useTheme } from '../../theme';
import { FieldMessage, RevealButton } from './FieldParts';
import { fieldBackground, fieldBorderColor, inputTextStyle } from './text-input-styles';

type FocusEvent = NativeSyntheticEvent<TargetedEvent>;

export type TextInputProps = Omit<
  RNTextInputProps,
  'style' | 'placeholderTextColor' | 'editable' | 'secureTextEntry' | 'onFocus' | 'onBlur'
> & {
  /** Visible label, also the accessible name. Every field has one (WCAG 1.3.1, 3.3.2). */
  label: string;
  helperText?: string;
  /** Marks the field invalid and replaces the helper text. */
  errorText?: string;
  disabled?: boolean;
  /** Hides the value (passwords) and adds a button to reveal it. */
  secure?: boolean;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
};

function useFocus(onFocus?: (e: FocusEvent) => void, onBlur?: (e: FocusEvent) => void) {
  const [focused, setFocused] = useState(false);
  return {
    focused,
    onFocus: (event: FocusEvent) => {
      setFocused(true);
      onFocus?.(event);
    },
    onBlur: (event: FocusEvent) => {
      setFocused(false);
      onBlur?.(event);
    },
  };
}

/** A labelled text field. Controlled by `value` / `onChangeText` like the React Native one. */
export function TextInput({
  label,
  helperText,
  errorText,
  disabled = false,
  secure = false,
  onFocus,
  onBlur,
  ...rest
}: TextInputProps) {
  const theme = useTheme();
  const labelId = useId();
  const { focused, ...focusHandlers } = useFocus(onFocus, onBlur);
  const [revealed, setRevealed] = useState(false);
  const hint = errorText ?? helperText;

  return (
    <Box gap="xs">
      <Text variant="label" nativeID={labelId}>
        {label}
      </Text>
      <Box
        flexDirection="row"
        alignItems="center"
        minHeight={minTouchTarget}
        paddingLeft="m"
        paddingRight={secure ? 'none' : 'm'}
        borderRadius="m"
        borderWidth={focused ? 2 : 1}
        borderColor={fieldBorderColor({ focused, invalid: errorText !== undefined, disabled })}
        backgroundColor={fieldBackground(disabled)}
      >
        <RNTextInput
          accessibilityLabel={label}
          aria-labelledby={labelId}
          {...(hint === undefined ? {} : { accessibilityHint: hint })}
          editable={!disabled}
          aria-disabled={disabled}
          secureTextEntry={secure && !revealed}
          placeholderTextColor={theme.colors.textMuted}
          style={inputTextStyle(theme, disabled)}
          {...focusHandlers}
          {...rest}
        />
        {secure && (
          <RevealButton
            revealed={revealed}
            disabled={disabled}
            onToggle={() => {
              setRevealed((value) => !value);
            }}
          />
        )}
      </Box>
      <FieldMessage helperText={helperText} errorText={errorText} />
    </Box>
  );
}
