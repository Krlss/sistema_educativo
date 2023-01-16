import { User } from "./user.entity";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import { UserSaveProps } from "../../infraestructure/types/users";
import { userServiceInterface } from "../../infraestructure/interfaces/user.interface";
export class usersService implements userServiceInterface {
  async findById(id: number) {
    const user = await AppDataSource.manager.findOne(User, {
      where: {
        id,
      },
      relations: {
        roles: true,
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
      relations: {
        roles: true,
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
    return await AppDataSource.manager.find(User, {
      relations: {
        roles: true,
      },
    });
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
