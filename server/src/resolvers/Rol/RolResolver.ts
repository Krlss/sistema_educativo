import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Rol } from "../../entities";
import { rolesService } from "../../services/roles";

@Resolver()
class RolResolver {
  private rolesService: rolesService;
  constructor() {
    this.rolesService = new rolesService();
  }

  @Mutation(() => Boolean)
  async createRol(@Arg("name") name: string) {
    if (!name) throw new Error("El nombre es requerido");
    await this.rolesService.createRol(name);
    return true;
  }

  @Query(() => [Rol])
  async getRoles() {
    const roles = await this.rolesService.getRoles();
    return roles;
  }

  @Query(() => Rol)
  async getRol(@Arg("id") id: number) {
    const rol = await this.rolesService.getRolById(id);
    return rol;
  }

  @Mutation(() => Boolean)
  async updateRol(@Arg("id") id: number, @Arg("name") name: string) {
    const rol = await this.rolesService.getRolById(id);
    if (!rol) throw new Error("El rol no existe");
    await this.rolesService.updateRol(rol, name);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteRol(@Arg("id") id: number) {
    const rol = await this.rolesService.getRolById(id);
    if (!rol) throw new Error("El rol no existe");
    await this.rolesService.deleteRol(rol);
    return true;
  }
}

export default RolResolver;
