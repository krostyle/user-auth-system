import { Permission } from './permission.entity';
export class Role {
  private name: string;
  private description: string;
  private permissions: Permission[];
  private isActive: boolean;

  constructor(name: string, description: string, permissions: Permission[]) {}
  // if (!name.trim()) throw new RoleException('Role name cannot be empty');
  // if (!description.trim())
  //   throw new RoleException('Role description cannot be empty');

  //     this.name = name;
  //     this.description = description;
  //     this.permissions = permissions;
  //   }

  public getName(): string {
    return '';
  }

  public getDescription(): string {
    return '';
  }

  //   public getName(): string {
  //     return this.name;
  //   }
  //   public getDescription(): string {
  //     return this.description;
  //   }
  //   public getPermissions(): Permission[] {
  //     return this.permissions;
  //   }

  //   public getIsActive(): boolean {
  //     return this.isActive;
  //   }
}
