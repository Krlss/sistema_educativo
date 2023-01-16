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
    const users = await this.userController.getUsers();
    if (!users) {
      throw new Error("No hay usuarios");
    }
    return users;
  }

  @Query(() => User)
  async getUser(@Arg("id") id: number) {
    const user = await this.userController.getUserById(id);
    if (!user) {
      throw new Error("El usuario no existe");
    }
    return user;
  }

  @Query(() => [User])
  async getUserByRol(@Arg("rol") rol: string) {
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
  async createUser(@Arg("data") args: userCreateInput) {
    return await this.userController.createUser({ ...args });
  }

  @Mutation(() => Boolean)
  async updateUser(@Arg("id") id: number, @Arg("data") args: userUpdateInput) {
    return await this.userController.updateUser(id, { ...args });
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: number) {
    return this.userController.deleteUser(id);
  }
}

export default UserResolver;
