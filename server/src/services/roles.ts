import { Rol } from "../entities/Rol";
import { AppDataSource } from "../config/typeorm";
import { In } from "typeorm";

export class rolesService {
  async getRolById(id: number) {
    const rol = await AppDataSource.manager.findOne(Rol, {
      where: {
        id,
      },
    });
    return rol;
  }

  async getRolByName(name: string) {
    const rol = await AppDataSource.manager.findOne(Rol, {
      where: {
        name,
      },
    });
    return rol;
  }

  async getRolesByArray(props: number[]) {
    const roles = await AppDataSource.manager.find(Rol, {
      where: {
        id: In(props),
      },
    });
    return roles;
  }

  async getRoles() {
    const roles = await AppDataSource.manager.find(Rol, {
      relations: {
        users: true,
      },
    });
    return roles;
  }

  async createRol(name: string) {
    const rol = new Rol();
    rol.name = name;
    rol.createdAt = new Date();
    rol.updatedAt = new Date();

    const newRol = await AppDataSource.manager.save(rol);
    return newRol;
  }

  async updateRol(rol: Rol, name: string) {
    rol.name = name;
    rol.updatedAt = new Date();

    const updatedRol = await AppDataSource.manager.save(rol);
    return updatedRol;
  }

  async deleteRol(rol: Rol) {
    const deletedRol = await AppDataSource.manager.remove(rol);
    return deletedRol;
  }
}
