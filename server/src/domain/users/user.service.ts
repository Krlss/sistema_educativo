import { User } from "./user.entity";
import { Rol } from "../roles/rol.entity";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import { hashPassword } from "../../infraestructure/helpers/bcrypt";
import { rolesService } from "../roles/rol.service";

export interface UserProps {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserCreateProps extends UserProps {
  roles: number[];
}

export interface UserSaveProps extends UserProps {
  roles: Rol[];
}

export interface UserUpdateProps extends UserProps {
  roles?: number[];
}

export class usersService {
  private rolesService: rolesService;

  constructor() {
    this.rolesService = new rolesService();
  }

  async findById(id: number) {
    const user = await AppDataSource.manager.findOne(User, {
      where: {
        id,
      },
    });
    return user;
  }

  async findAllByRol(rol: string) {
    const users = await AppDataSource.manager.find(User, {
      where: {
        roles: {
          name: rol,
        },
      },
    });
    return users;
  }

  async findByEmail(email: string) {
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

  async findAll() {
    return await AppDataSource.manager.find(User);
  }

  async create(user: UserSaveProps) {
    await AppDataSource.manager.save(user);
    return true;
  }

  async update(user: User) {
    await AppDataSource.manager.save(user);
    return true;
  }

  async delete(id: number) {
    await AppDataSource.manager.delete(User, { id });
    return true;
  }
}
