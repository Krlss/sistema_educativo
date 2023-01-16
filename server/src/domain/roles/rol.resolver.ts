import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Rol } from "../../infraestructure/entities";
import {
  rolUpdateInput,
  rolCreateInput,
} from "../../infraestructure/validations/roles";
import { rolController } from "./rol.controller";

@Resolver()
class RolResolver {
  private rolController: rolController;
  constructor() {
    this.rolController = new rolController();
  }

  @Mutation(() => Boolean)
  async createRol(@Arg("data") args: rolCreateInput) {
    return await this.rolController.createRol(args);
  }

  @Query(() => [Rol])
  async getRoles() {
    return await this.rolController.getRoles();
  }

  @Query(() => Rol)
  async getRol(@Arg("id") id: number) {
    return await this.rolController.getRolById(id);
  }

  @Mutation(() => Boolean)
  async updateRol(@Arg("id") id: number, @Arg("data") args: rolUpdateInput) {
    return await this.rolController.updateRol(id, args);
  }

  @Mutation(() => Boolean)
  async deleteRol(@Arg("id") id: number) {
    return await this.rolController.deleteRol(id);
  }
}

export default RolResolver;
