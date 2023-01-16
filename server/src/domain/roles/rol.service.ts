import { Rol } from "./rol.entity";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import { In } from "typeorm";

export class rolService {
  async findById(id: number): Promise<Rol | null> {
    return await AppDataSource.manager.findOne(Rol, {
      where: {
        id,
      },
      relations: {
        users: true,
      },
    });
  }

  async findByName(name: string): Promise<Rol | null> {
    return await AppDataSource.manager.findOne(Rol, {
      where: {
        name,
      },
      relations: {
        users: true,
      },
    });
  }

  async findAllByArray(ids: number[]): Promise<Rol[] | []> {
    return await AppDataSource.manager.find(Rol, {
      where: {
        id: In(ids),
      },
      relations: {
        users: true,
      },
    });
  }

  async findAll(): Promise<Rol[] | []> {
    return await AppDataSource.manager.find(Rol, {
      relations: {
        users: true,
      },
    });
  }

  async create(rol: Rol) {
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
