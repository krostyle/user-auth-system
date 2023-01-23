import { Email } from '../../../../src/domain/value-objects/email/email.value-object';
describe('Email value object', () => {
  test('should create a valid email', () => {
    const validEmail = 'example@example.com';
    const email = new Email(validEmail);
    expect(email.getValue()).toBe('example@example.com');
  });

  test('should throw an error if email is invalid', () => {
    const invalidEmail = 'invalid';
    expect(() => new Email(invalidEmail)).toThrowError('Invalid email');
  });

  test('should compare two emails for equality', () => {
    const baseEmail = 'email@example.com';
    const equalEmail = 'email@example.com';
    const differentEmail = 'emaildif@example.com';
    const baseEmailObject = new Email(baseEmail);
    const equalEmailObject = new Email(equalEmail);
    const differentEmailObject = new Email(differentEmail);
    expect(baseEmailObject.equals(equalEmailObject)).toBeTruthy();
    expect(baseEmailObject.equals(differentEmailObject)).toBeFalsy();
  });
});
