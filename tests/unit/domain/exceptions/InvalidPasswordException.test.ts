import { InvalidPasswordException } from '../../../../src/domain/exceptions/InvalidPasswordException.exception';
import { Password } from '../../../../src/domain/value-objects/password.value-object';

describe('Invalid Password exceptions', () => {
  test('should throw InvalidPasswordException for an invalid password', () => {
    const invalidPassword = 'invalid';
    expect(() => new Password(invalidPassword)).toThrowError(
      InvalidPasswordException,
    );
  });

  test('should not throw any exception for a valid password', () => {
    const validPassword = 'validPassword123-';
    expect(() => new Password(validPassword)).not.toThrowError(
      InvalidPasswordException,
    );
  });
});
