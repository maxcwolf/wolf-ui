import { minTouchTarget } from '@maxcwolf/ui-tokens';
import { Box, Pressable, Text } from '../../primitives';
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

/**
 * Helper text, or the error in its place (WCAG 3.3.1). The error renders inside a polite live
 * region that is always mounted: screen readers announce a change inside a live region that
 * already exists, but VoiceOver in Safari skips one that arrives with its text (WCAG 4.1.3).
 * Spacing is a top margin rather than the parent's gap, so the empty region takes no space.
 */
export function FieldMessage({ id, helperText, errorText }: FieldMessageProps) {
  return (
    <>
      {errorText === undefined && helperText !== undefined && (
        <Text variant="caption" color="textMuted" nativeID={id} marginTop="xs">
          {helperText}
        </Text>
      )}
      <Box accessibilityLiveRegion="polite" aria-live="polite">
        {errorText !== undefined && (
          <Text variant="caption" color="danger" role="alert" nativeID={id} marginTop="xs">
            {errorText}
          </Text>
        )}
      </Box>
    </>
  );
}
