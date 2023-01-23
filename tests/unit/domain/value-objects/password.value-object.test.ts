import { Password } from '../../../../src/domain/value-objects/password.value-object';
describe('Password value objects', () => {
  it('should create a valid password', () => {
    const validPassword = 'validPassword123-';
    const password = new Password(validPassword);
    expect(password).toBeDefined();
  });

  it('should throw an exception when creating a password with less than 8 characters', () => {
    const invalidPassword = 'invalid';
    expect(() => new Password(invalidPassword)).toThrowError(
      'Password must be at least 8 characters long',
    );
  });

  it('should throw an exception when creating a password with no special character', () => {
    const invalidPassword = 'invalidPassword';
    expect(() => new Password(invalidPassword)).toThrowError(
      'Password must contain at least one special character',
    );
  });

  it('should throw an exception when creating a password with no number', () => {
    const invalidPassword = 'invalidPassword-';
    expect(() => new Password(invalidPassword)).toThrowError(
      'Password must contain at least one number',
    );
  });

  // it('should be able to compare passwords', () => {
  //   const password = 'Password1!';
  //   const samePassword = 'Password1!';
  //   const differentPassword = 'password';
  //   const passwordValueObject = new Password(password);
  //   expect(passwordValueObject.compare(samePassword)).toBeTruthy();
  //   expect(passwordValueObject.compare(differentPassword)).toBeFalsy();
  // });
});
