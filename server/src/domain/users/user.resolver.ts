import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { comparePassword } from "../../infraestructure/helpers/bcrypt";
import { User } from "../../infraestructure/entities";
import { LoginInputs } from "../../validations/LoginInputs";
import { userController } from "./user.controller";
import { UpdateUserInputs } from "../../validations/UpdateUserInputs";
import { CreateUserInputs } from "../../validations/CreateUserInputs";
import { rolesService } from "../roles/rol.service";

@Resolver()
class UserResolver {
  private userController: userController;
  private rolesService: rolesService;
  constructor() {
    this.userController = new userController();
    this.rolesService = new rolesService();
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
  async login(@Arg("data") { email, password, rememberMe }: LoginInputs) {
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
  async createUser(@Arg("data") args: CreateUserInputs) {
    return await this.userController.createUser({ ...args });
  }

  @Mutation(() => Boolean)
  async updateUser(@Arg("id") id: number, @Arg("data") args: UpdateUserInputs) {
    return await this.userController.updateUser(id, { ...args });
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: number) {
    return this.userController.deleteUser(id);
  }
}

export default UserResolver;
