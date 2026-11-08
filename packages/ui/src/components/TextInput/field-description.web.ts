import type { FieldDescription } from './field-description';

/**
 * On the web the description is the message element itself (WCAG 1.3.1, 3.3.1). React Native's
 * types do not list these attributes, but React Native Web passes them to the input.
 */
export function fieldDescription({ messageId, message, invalid }: FieldDescription) {
  return {
    ...(message === undefined ? {} : { 'aria-describedby': messageId }),
    ...(invalid ? { 'aria-invalid': true } : {}),
  };
}
