import { Permission } from '../../../../src/domain/entities/permission.entity';

describe('Permission entity', () => {
  test('should create a permission with name and description ', () => {
    const permissionWithNameAndDescription = new Permission(
      'view_users',
      'Can view users list',
    );
    expect(permissionWithNameAndDescription).toBeDefined();
    expect(permissionWithNameAndDescription.getName()).toBe('view_users');
    expect(permissionWithNameAndDescription.getDescription()).toBe(
      'Can view users list',
    );
  });

  //   test('Should not create a permission with empty name', () => {
  //     expect(() => {
  //       new Permission('', 'Can view users list');
  //     }).toThrow(PermissionNameCannotBeEmpty);
  //   });

  //   test('Should not create a permission with empty description', () => {
  //     expect(() => {
  //       new Permission('view_users', '');
  //     }).toThrow(PermissionDescriptionCannotBeEmpty);
  //   });
});
