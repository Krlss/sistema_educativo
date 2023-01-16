import { rolesService } from "./rol.service";

export class rolesController {
  private rolesService: rolesService;

  constructor() {
    this.rolesService = new rolesService();
  }

  async getRoles() {
    return await this.rolesService.findAll();
  }

  async getRolById(id: number) {
    return await this.rolesService.findById(id);
  }

  async getRolByName(name: string) {
    return await this.rolesService.findByName(name);
  }

  async createRol(name: string) {
    try {
      await this.rolesService.create(name);
      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateRol(id: number, name: string) {
    try {
      const rol = await this.getRolById(id);
      if (!rol) throw new Error("El rol no existe");
      rol.name = name;
      rol.updatedAt = new Date();
      return await this.rolesService.update(rol);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteRol(id: number) {
    try {
      const rol = await this.getRolById(id);
      if (!rol) throw new Error("El rol no existe");
      return await this.rolesService.delete(rol);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
