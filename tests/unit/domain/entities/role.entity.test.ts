import { Role } from '../../../../src/domain/entities/role.entity';
describe('Role entity', () => {
  test('Should create a new role', () => {
    const name = 'admin';
    const description = 'Administrator';
    const permissions = [];
    const role = new Role(name, description, permissions);
    expect(role).toBeDefined;
  });
});
