import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Rol } from "./rol.entity";
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
  async createRol(
    @Arg("data") args: rolCreateInput
  ): Promise<boolean | unknown> {
    return await this.rolController.createRol(args);
  }

  @Query(() => [Rol])
  async getRoles() {
    return await this.rolController.getRoles();
  }

  @Query(() => Rol, { nullable: true })
  async getRol(@Arg("id") id: number) {
    return await this.rolController.getRolById(id);
  }

  @Mutation(() => Boolean)
  async updateRol(
    @Arg("id") id: number,
    @Arg("data") args: rolUpdateInput
  ): Promise<boolean | unknown> {
    return await this.rolController.updateRol(id, args);
  }

  @Mutation(() => Boolean)
  async deleteRol(@Arg("id") id: number): Promise<boolean | unknown> {
    return await this.rolController.deleteRol(id);
  }
}

export default RolResolver;
