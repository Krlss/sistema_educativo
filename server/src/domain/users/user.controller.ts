import { hashPassword } from "../../infraestructure/helpers/bcrypt";
import { User } from "./user.entity";
import { usersService } from "./user.service";
import { rolService } from "../roles/rol.service";
import { userCreateInput } from "../../infraestructure/validations/users/user.create.inputs";
import { UserUpdateProps } from "../../infraestructure/types/users";

export class userController {
  private userService: usersService;
  private rolService: rolService;
  constructor() {
    this.userService = new usersService();
    this.rolService = new rolService();
  }

  async getUsers(): Promise<User[] | []> {
    return await this.userService.findAll();
  }

  async getUserById(id: number): Promise<User | null> {
    return await this.userService.findById(id);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.userService.findByEmail(email);
  }

  async getUsersByRol(rol: string): Promise<User[] | []> {
    return await this.userService.findAllByRol(rol);
  }

  async createUser(data: userCreateInput): Promise<boolean | unknown> {
    try {
      const user = new User();
      user.name = data.name;
      user.lastName = data.lastName;
      user.email = data.email;
      user.password = hashPassword(data.password);
      user.roles = await this.rolService.findAllByArray(data.roles);

      return await this.userService.create(user);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateUser(
    id: number,
    props: UserUpdateProps
  ): Promise<boolean | unknown> {
    try {
      const { name, lastName, email, password, roles } = props;
      const user = await this.getUserById(id);

      if (!user) throw new Error("El usuario no existe");
      user.name = name;
      user.lastName = lastName;
      user.email = email;
      if (password) user.password = hashPassword(password);
      if (roles) user.roles = await this.rolService.findAllByArray(roles);
      user.updatedAt = new Date();

      return await this.userService.update(user);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteUser(id: number): Promise<boolean | unknown> {
    try {
      const user = await this.getUserById(id);
      if (!user) throw new Error("El usuario no existe");

      return await this.userService.delete(id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
