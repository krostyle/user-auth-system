import { InvalidEmailException } from '../../exceptions/invalidEmailException.exception';

export class Email {
  private readonly _email: string;
  private emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  constructor(email: string) {
    if (!this.isValid(email)) {
      throw new InvalidEmailException('Invalid email');
    }
    this._email = email;
  }

  public getValue(): string {
    return this._email;
  }

  public isValid(value: string): boolean {
    return this.emailRegex.test(value);
  }

  public equals(email: Email): boolean {
    return this._email === email._email;
  }
}
