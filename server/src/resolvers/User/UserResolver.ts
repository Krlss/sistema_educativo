import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { comparePassword } from "../../helpers/bcrypt";
import { User } from "../../entities";
import { LoginInputs } from "../../validations/LoginInputs";
import { usersService } from "../../services/users";
import { UpdateUserInputs } from "../../validations/UpdateUserInputs";
import { CreateUserInputs } from "../../validations/CreateUserInputs";
import { rolesService } from "../../services/roles";

@Resolver()
class UserResolver {
  private usersService: usersService;
  private rolesService: rolesService;
  constructor() {
    this.usersService = new usersService();
    this.rolesService = new rolesService();
  }

  @Query(() => [User])
  async getUsers() {
    const users = await this.usersService.getAllUsers();
    if (!users) {
      throw new Error("No hay usuarios");
    }
    return users;
  }

  @Query(() => User)
  async getUser(@Arg("id") id: number) {
    const user = await this.usersService.getUserById(id);
    if (!user) {
      throw new Error("El usuario no existe");
    }
    return user;
  }

  @Query(() => [User])
  async getUserByRol(@Arg("rol") rol: string) {
    return await this.usersService.getUsersByRol(rol);
  }

  @Query(() => User)
  async login(@Arg("data") { email, password, rememberMe }: LoginInputs) {
    const user = await this.usersService.getUserByEmail(email);
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
    try {
      const roles = await this.rolesService.getRolesByArray(args.roles);
      this.usersService.createUser({ ...args, roles });

      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Mutation(() => Boolean)
  async updateUser(@Arg("id") id: number, @Arg("data") args: UpdateUserInputs) {
    try {
      const user = await this.usersService.getUserById(id);

      if (!user) throw new Error("El usuario no existe");

      this.usersService.updateUser(user, { ...args });

      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: number) {
    try {
      const user = await this.usersService.getUserById(id);

      if (!user) throw new Error("El usuario no existe");

      this.usersService.deleteUser(id);

      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default UserResolver;
