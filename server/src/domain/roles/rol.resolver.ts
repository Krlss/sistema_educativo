import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Rol } from "../../infraestructure/entities";
import { rolesController } from "./rol.controller";

@Resolver()
class RolResolver {
  private rolesController: rolesController;
  constructor() {
    this.rolesController = new rolesController();
  }

  @Mutation(() => Boolean)
  async createRol(@Arg("name") name: string) {
    return await this.rolesController.createRol(name);
  }

  @Query(() => [Rol])
  async getRoles() {
    return await this.rolesController.getRoles();
  }

  @Query(() => Rol)
  async getRol(@Arg("id") id: number) {
    return await this.rolesController.getRolById(id);
  }

  @Mutation(() => Boolean)
  async updateRol(@Arg("id") id: number, @Arg("name") name: string) {
    return await this.rolesController.updateRol(id, name);
  }

  @Mutation(() => Boolean)
  async deleteRol(@Arg("id") id: number) {
    return await this.rolesController.deleteRol(id);
  }
}

export default RolResolver;
