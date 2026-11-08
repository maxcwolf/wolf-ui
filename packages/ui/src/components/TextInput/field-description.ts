import type { TextInputProps } from 'react-native';

export interface FieldDescription {
  /** `nativeID` of the helper or error text. */
  messageId: string;
  /** The helper text, or the error in its place. */
  message: string | undefined;
  invalid: boolean;
}

/**
 * Ties a field to its helper or error text so a screen reader reads it with the field. iOS and
 * Android read it as the accessibility hint. The web version (field-description.web.ts) uses
 * aria-describedby and aria-invalid instead, because React Native Web drops hints.
 */
export function fieldDescription({
  message,
}: FieldDescription): Pick<TextInputProps, 'accessibilityHint'> {
  return message === undefined ? {} : { accessibilityHint: message };
}
