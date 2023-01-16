import { Rol } from "./rol.entity";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import { In } from "typeorm";

export class rolesService {
  async findById(id: number) {
    const rol = await AppDataSource.manager.findOne(Rol, {
      where: {
        id,
      },
    });
    return rol;
  }

  async findByName(name: string) {
    const rol = await AppDataSource.manager.findOne(Rol, {
      where: {
        name,
      },
    });
    return rol;
  }

  async findAllByArray(props: number[]) {
    const roles = await AppDataSource.manager.find(Rol, {
      where: {
        id: In(props),
      },
    });
    return roles;
  }

  async findAll() {
    const roles = await AppDataSource.manager.find(Rol, {
      relations: {
        users: true,
      },
    });
    return roles;
  }

  async create(rol: string) {
    await AppDataSource.manager.save(rol);
    return true;
  }

  async update(rol: Rol) {
    await AppDataSource.manager.save(rol);
    return true;
  }

  async delete(rol: Rol) {
    await AppDataSource.manager.remove(rol);
    return true;
  }
}
