import { InvalidEmailException } from '../../../../src/domain/exceptions/invalidEmailException.exception';
import { Email } from '../../../../src/domain/value-objects/email/email.value-object';

describe('Invalid Email exceptions', () => {
  test('should throw InvalidEmailException for an invalid email', () => {
    const invalidEmail = 'invalid';
    expect(() => new Email(invalidEmail)).toThrowError(InvalidEmailException);
  });

  test('should not throw any exception for a valid email', () => {
    const validEmail = 'valid@example.com';
    expect(() => new Email(validEmail)).not.toThrowError(InvalidEmailException);
  });
});
