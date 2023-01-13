import { User } from "../entities/User";
import { Rol } from "../entities/Rol";
import { AppDataSource } from "../config/typeorm";
import { hashPassword } from "../helpers/bcrypt";
import { rolesService } from "./roles";

export interface UserProps {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

interface UserCreateProps extends UserProps {
  roles: Rol[];
}

interface UserUpdateProps extends UserProps {
  roles?: number[];
}

export class usersService {
  private rolesService: rolesService;

  constructor() {
    this.rolesService = new rolesService();
  }

  async getUserById(id: number) {
    const user = await AppDataSource.manager.findOne(User, {
      where: {
        id,
      },
    });
    return user;
  }

  async getUsersByRol(rol: string) {
    const users = await AppDataSource.manager.find(User, {
      where: {
        roles: {
          name: rol,
        },
      },
    });
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await AppDataSource.manager.findOne(User, {
      where: {
        email,
      },
      relations: {
        roles: true,
      },
    });
    return user;
  }

  async getAllUsers() {
    const users = await AppDataSource.manager.find(User);
    return users;
  }

  async createUser(props: UserCreateProps) {
    const { name, lastName, email, password, roles } = props;
    const user = new User();
    user.name = name;
    user.lastName = lastName;
    user.email = email.toLowerCase();
    user.roles = roles;
    user.password = hashPassword(password);
    user.createdAt = new Date();
    user.updatedAt = new Date();

    await AppDataSource.manager.save(user);
    return user;
  }

  async updateUser(user: User, props: UserUpdateProps) {
    const { name, lastName, email, password, roles } = props;
    if (name) user.name = name;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;
    if (password) user.password = hashPassword(password);
    if (roles) {
      const rols = await this.rolesService.getRolesByArray(roles);
      user.roles = rols;
    }
    user.updatedAt = new Date();
    await AppDataSource.manager.save(user);
    return user;
  }

  async deleteUser(id: number) {
    await AppDataSource.manager.delete(User, { id });
    return true;
  }
}
