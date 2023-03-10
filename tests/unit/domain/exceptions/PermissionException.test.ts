import { Permission } from '../../../../src/domain/entities/permission.entity';
import { PermissionException } from '../../../../src/domain/exceptions/PermissionException';

describe('Permission exceptions', () => {
  test('Should throw PermissionException when name is empty', () => {
    const permissionName = '';
    const permissionDescription = 'some description';
    expect(() => {
      new Permission(permissionName, permissionDescription);
    }).toThrow(PermissionException);
  });

  test('Should throw PermissionException when name is only whitespaces', () => {
    const permissionName = ' ';
    const permissionDescription = 'some description';
    expect(() => {
      new Permission(permissionName, permissionDescription);
    }).toThrow(PermissionException);
  });

  test('Should throw PermissionExcepetion when description is empty', () => {
    const permissionName = 'some name';
    const permissionDescription = '';
    expect(() => {
      new Permission(permissionName, permissionDescription);
    }).toThrow(PermissionException);
  });

  test('Should throw PermissionException when description is only whitespaces', () => {
    const permissionName = 'some name';
    const permissionDescription = ' ';
    expect(() => {
      new Permission(permissionName, permissionDescription);
    }).toThrow(PermissionException);
  });

  test('Should not throw Permission when name and description are not empty', () => {
    const permissionName = 'some name';
    const permissionDescription = 'some description';
    expect(() => {
      new Permission(permissionName, permissionDescription);
    }).not.toThrow(PermissionException);
  });
});
