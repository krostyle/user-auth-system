import { User } from '../../../../src/domain/entities/user.entity';

describe('User', () => {
  test('should create a user with correct name , lastname , password, email and status', () => {
    const userData = {
      name: 'Walter',
      lastName: 'White',
      password: 'Heisenberg',
      email: 'walterwhite@breakingbad.com',
      status: true,
    };
    const user = new User(userData);

    expect(user.name).toEqual('Walter');
    expect(user.lastName).toEqual('White');
    expect(user.password).toEqual('Heisenberg');
    expect(user.email).toEqual('walterwhite@breakingbad.com');
    expect(user.status).toEqual(true);
  });
});
