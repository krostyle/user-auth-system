export class Password {
  private readonly _password: string;
  private _hash: string;
  constructor(password: string) {
    this.validate(password);
    this._password = password;
    // this._hash = this.hash();
  }

  private validate(password: string) {
    if (password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }

    if (!password.match(/[!@#$%^&*(),.?":{}|<>-]/)) {
      throw new Error('Password must contain at least one special character');
    }

    if (!password.match(/\d/)) {
      throw new Error('Password must contain at least one number');
    }
  }

  //   private hash() {
  //     return password;
  //   }

  public compare(password: string): boolean {
    return true;
  }
}
