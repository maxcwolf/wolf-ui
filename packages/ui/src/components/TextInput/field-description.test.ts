import { fieldDescription as native } from './field-description';
import { fieldDescription as web } from './field-description.web';

const field = { messageId: 'message', message: 'Enter an email', invalid: true };

describe('fieldDescription', () => {
  it('reads the message as the hint on iOS and Android', () => {
    expect(native(field)).toEqual({ accessibilityHint: 'Enter an email' });
    expect(native({ ...field, message: undefined })).toEqual({});
  });

  it('describes the field by its message on the web, and marks it invalid', () => {
    expect(web(field)).toEqual({ 'aria-describedby': 'message', 'aria-invalid': true });
    expect(web({ ...field, invalid: false })).toEqual({ 'aria-describedby': 'message' });
    expect(web({ ...field, message: undefined, invalid: false })).toEqual({});
  });
});
