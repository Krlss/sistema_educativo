import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { AppDataSource } from "../../config/typeorm";
const { ObjectId } = require("mongodb");

import { User } from "../../entities/User";
import { comparePassword, hashPassword } from "../../helpers/bcrypt";

@Resolver()
export class UserResolver {
  /* Crea un nuevo usuario con progreso 0*/
  @Mutation(() => String)
  async createUser(
    @Arg("name") name: string,
    @Arg("lastname") lastname: string,
    @Arg("mail") mail: string,
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Arg("rol", (type) => [String]) rol: string[]
  ) {
    const user = new User();
    user.name = name;
    user.lastname = lastname;
    user.mail = mail;
    user.username = username;
    user.password = hashPassword(password);
    if (rol.length == 0) {
      user.rol = ["Student"];
    } else {
      user.rol = rol;
    }
    user.progress = [];
    await AppDataSource.manager.save(user);
    return user._id.toString();
  }

  /* Elimina un usuario */
  @Mutation(() => Boolean)
  async DeleteUser(@Arg("userId") userId: string) {
    const user = await AppDataSource.manager.findOneBy(User, {
      _id: new ObjectId(userId),
    });
    if (!user) {
      return false;
    }
    await AppDataSource.manager.delete(User, user._id);
    return true;
  }

  /* Consulta un usuario por medio del _id */
  @Query(() => [User])
  async getUser(@Arg("userId") userId: string) {
    const user = await AppDataSource.manager.findOneBy(User, {
      _id: new ObjectId(userId),
    });
    if (!user) {
      return false;
    }
    return false;
  }

  /* Consultar login de usuario */
  @Query(() => User)
  async login(
    @Arg("username") username: string,
    @Arg("password") password: string
  ) {
    const user = await AppDataSource.manager.findOneBy(User, {
      username: username,
    });
    if (!user) {
      return null;
    }
    if (!comparePassword(password, user.password)) {
      return null;
    }
    return user;
  }

  /* Consulta todos los usuarios */
  @Query(() => [User])
  async getUsers() {
    const users = await AppDataSource.manager.find(User);
    return users;
  }

  /* Actualiza un usuario */
  @Mutation(() => Boolean)
  async updateUser(
    @Arg("userId") userId: string,
    @Arg("name") name: string,
    @Arg("lastname") lastname: string,
    @Arg("mail") mail: string,
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Arg("rol", (type) => [String]) rol: string[]
  ) {
    let user = await AppDataSource.manager.findOneBy(User, {
      _id: new ObjectId(userId),
    });
    if (!user) {
      return false;
    }
    user.name = name;
    user.lastname = lastname;
    user.mail = mail;
    user.username = username;
    user.password = hashPassword(password);
    user.rol = [...new Set<string>(user.rol.concat(rol))];
    await AppDataSource.manager.update(User, user._id, user);
    return true;
  }
}
