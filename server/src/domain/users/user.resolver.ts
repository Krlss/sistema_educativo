import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { comparePassword } from "../../infraestructure/helpers/bcrypt";
import { User } from "../../infraestructure/entities";
import { userController } from "./user.controller";
import {
  userCreateInput,
  userLoginInputs,
  userUpdateInput,
} from "../../infraestructure/validations/users";

@Resolver()
class UserResolver {
  private userController: userController;
  constructor() {
    this.userController = new userController();
  }

  @Query(() => [User])
  async getUsers() {
    return await this.userController.getUsers();
  }

  @Query(() => User, { nullable: true })
  async getUser(@Arg("id") id: number) {
    return await this.userController.getUserById(id);
  }

  @Query(() => [User])
  async getUsersByRol(@Arg("rol") rol: string) {
    return await this.userController.getUsersByRol(rol);
  }

  @Query(() => User)
  async login(@Arg("data") { email, password, rememberMe }: userLoginInputs) {
    const user = await this.userController.getUserByEmail(email);
    if (!user) {
      throw new Error("El usuario no existe");
    }
    if (!comparePassword(password, user.password)) {
      throw new Error("Contraseña incorrecta");
    }
    return { ...user, rememberMe };
  }

  @Mutation(() => Boolean)
  async createUser(
    @Arg("data") args: userCreateInput
  ): Promise<boolean | unknown> {
    return await this.userController.createUser({ ...args });
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Arg("id") id: number,
    @Arg("data") args: userUpdateInput
  ): Promise<boolean | unknown> {
    return await this.userController.updateUser(id, { ...args });
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: number): Promise<boolean | unknown> {
    return this.userController.deleteUser(id);
  }
}

export default UserResolver;
