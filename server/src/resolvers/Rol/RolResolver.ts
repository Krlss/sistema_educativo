import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Rol } from "../../entities";
import { AppDataSource } from "../../config/typeorm";

@Resolver()
export class RolResolver {
  @Mutation(() => Boolean)
  async createRol(@Arg("name") name: string) {
    const rol = new Rol();
    rol.name = name;
    await AppDataSource.manager.save(rol);
    return true;
  }

  @Query(() => [Rol])
  async getRoles() {
    const roles = await AppDataSource.manager.find(Rol);
    return roles;
  }
}
