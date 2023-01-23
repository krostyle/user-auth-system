export class User {
  name: string;
  lastName: string;
  email: string;
  password: string;
  status: boolean;

  constructor(userData: {
    name: string;
    lastName: string;
    email: string;
    password: string;
    status: boolean;
  }) {
    this.name = userData.name;
    this.lastName = userData.lastName;
    this.email = userData.email;
    this.password = userData.password;
    this.status = userData.status;
  }
}
