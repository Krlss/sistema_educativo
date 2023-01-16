import { User } from "./user.entity";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import { UserSaveProps } from "../../infraestructure/types/users";
export class usersService {
  async findById(id: number) {
    return await AppDataSource.manager.findOne(User, {
      where: {
        id,
      },
      relations: {
        roles: true,
      },
    });
  }

  async findAllByRol(rol: string): Promise<User[] | []> {
    return await AppDataSource.manager.find(User, {
      where: {
        roles: {
          name: rol,
        },
      },
      relations: {
        roles: true,
      },
    });
  }

  async findByEmail(email: string) {
    return await AppDataSource.manager.findOne(User, {
      where: {
        email,
      },
      relations: {
        roles: true,
      },
    });
  }

  async findAll(): Promise<User[] | []> {
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
