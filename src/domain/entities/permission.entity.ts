import { PermissionException } from '../exceptions/PermissionException';
export class Permission {
  private name: string;
  private description: string;

  constructor(name: string, description: string) {
    if (!name.trim())
      throw new PermissionException('Permission name cannot be empty');
    if (!description.trim())
      throw new PermissionException('Permission description cannot be empty');

    this.name = name;
    this.description = description;
  }

  public getName(): string {
    return this.name;
  }
  public getDescription(): string {
    return this.description;
  }
}
