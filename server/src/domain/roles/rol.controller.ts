import { rolCreateInput } from "../../infraestructure/validations/roles/rol.create.inputs";
import { rolUpdateInput } from "../../infraestructure/validations/roles/rol.update.inputs";
import { Rol } from "./rol.entity";
import { rolService } from "./rol.service";

export class rolController {
  private rolService: rolService;

  constructor() {
    this.rolService = new rolService();
  }

  async getRoles() {
    return await this.rolService.findAll();
  }

  async getRolById(id: number) {
    return await this.rolService.findById(id);
  }

  async getRolByName(name: string) {
    return await this.rolService.findByName(name);
  }

  async createRol(data: rolCreateInput): Promise<boolean | unknown> {
    try {
      const rol = new Rol();
      rol.name = data.name;

      return await this.rolService.create(rol);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateRol(
    id: number,
    data: rolUpdateInput
  ): Promise<boolean | unknown> {
    try {
      const rol = await this.getRolById(id);
      if (!rol) throw new Error("El rol no existe");

      rol.name = data.name;
      rol.updatedAt = new Date();

      return await this.rolService.update(rol);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteRol(id: number): Promise<boolean | unknown> {
    try {
      const rol = await this.getRolById(id);
      if (!rol) throw new Error("El rol no existe");

      return await this.rolService.delete(rol);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
