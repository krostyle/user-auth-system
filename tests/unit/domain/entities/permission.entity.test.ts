import { Permission } from '../../../../src/domain/entities/permission.entity';
import { PermissionException } from '../../../../src/domain/exceptions/PermissionException';

describe('Permission entity', () => {
  test('Should create a permission with name and description ', () => {
    const namePermission = 'view_users';
    const descriptionPermission = 'Can view users list';
    const permissionWithNameAndDescription = new Permission(
      namePermission,
      descriptionPermission,
    );
    expect(permissionWithNameAndDescription).toBeDefined();
    expect(permissionWithNameAndDescription.getName()).toBe('view_users');
    expect(permissionWithNameAndDescription.getDescription()).toBe(
      'Can view users list',
    );
  });

  test('Should not create a permission with empty name', () => {
    const namePermission = '';
    const descriptionPermission = 'Can view users list';
    expect(() => {
      new Permission(namePermission, descriptionPermission);
    }).toThrow(PermissionException);
  });

  test('Should not create a permission with whitespace name', () => {
    const namePermission = ' ';
    const descriptionPermission = 'Can view users list';
    expect(() => {
      new Permission(namePermission, descriptionPermission);
    }).toThrow(PermissionException);
  });

  test('Should not create a permission with empty description', () => {
    const namePermission = 'view_users';
    const descriptionPermission = '';
    expect(() => {
      new Permission(namePermission, descriptionPermission);
    }).toThrow(PermissionException);
  });

  test('Should not create a permission with whitespace description', () => {
    const namePermission = 'view_users';
    const descriptionPermission = ' ';
    expect(() => {
      new Permission(namePermission, descriptionPermission);
    }).toThrow(PermissionException);
  });

  test('Should not create a permission with empty name and description', () => {
    const namePermission = '';
    const descriptionPermission = '';
    expect(() => {
      new Permission(namePermission, descriptionPermission);
    }).toThrow(PermissionException);
  });

  test('Should not create a permission with whitespace name and description', () => {
    const namePermission = ' ';
    const descriptionPermission = ' ';
    expect(() => {
      new Permission(namePermission, descriptionPermission);
    }).toThrow(PermissionException);
  });
});
