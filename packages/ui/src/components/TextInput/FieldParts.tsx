import { minTouchTarget } from '@maxcwolf/ui-tokens';
import { Pressable, Text } from '../../primitives';
import { Icon } from '../Icon';

interface RevealButtonProps {
  revealed: boolean;
  disabled: boolean;
  onToggle: () => void;
}

/** Shows or hides a secure value. A full 44dp target inside the field (WCAG 2.5.8). */
export function RevealButton({ revealed, disabled, onToggle }: RevealButtonProps) {
  return (
    <Pressable
      role="button"
      accessibilityLabel={revealed ? 'Hide password' : 'Show password'}
      onPress={onToggle}
      disabled={disabled}
      minWidth={minTouchTarget}
      minHeight={minTouchTarget}
      alignItems="center"
      justifyContent="center"
    >
      <Icon name={revealed ? 'eye-off' : 'eye'} color="textMuted" />
    </Pressable>
  );
}

interface FieldMessageProps {
  id: string;
  helperText: string | undefined;
  errorText: string | undefined;
}

/** Helper text, or the error in its place, announced politely when it appears (WCAG 3.3.1, 4.1.3). */
export function FieldMessage({ id, helperText, errorText }: FieldMessageProps) {
  if (errorText !== undefined) {
    return (
      <Text
        variant="caption"
        color="danger"
        role="alert"
        accessibilityLiveRegion="polite"
        nativeID={id}
      >
        {errorText}
      </Text>
    );
  }
  if (helperText === undefined) return null;
  return (
    <Text variant="caption" color="textMuted" nativeID={id}>
      {helperText}
    </Text>
  );
}
