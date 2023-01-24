import { Password } from '../../../../src/domain/value-objects/password.value-object';
import { InvalidPasswordException } from '../../../../src/domain/exceptions/InvalidPasswordException.exception';
describe('Password value objects', () => {
  test('should create a valid password', () => {
    const validPassword = 'validPassword123-';
    const password = new Password(validPassword);
    expect(password).toBeDefined();
  });

  test('should throw an exception when creating a password with less than 8 characters', () => {
    const invalidPassword = 'invalid';
    expect(() => new Password(invalidPassword)).toThrowError(
      InvalidPasswordException,
    );
  });

  test('should throw an exception when creating a password with no special character', () => {
    const invalidPassword = 'invalidPassword';
    expect(() => new Password(invalidPassword)).toThrowError(
      InvalidPasswordException,
    );
  });

  test('should throw an exception when creating a password with no number', () => {
    const invalidPassword = 'invalidPassword-';
    expect(() => new Password(invalidPassword)).toThrowError(
      InvalidPasswordException,
    );
  });
  //get value
  test('should return the password value', () => {
    const validPassword = 'validPassword123-';
    const password = new Password(validPassword);
    expect(password.getValue()).toBe(validPassword);
  });
});
