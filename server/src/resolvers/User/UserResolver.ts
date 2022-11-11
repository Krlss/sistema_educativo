import { Request, Response } from "express";
import { Resolver, Query, Mutation, Arg, Ctx } from "type-graphql";
import { AppDataSource } from "../../config/typeorm";
const { ObjectId } = require("mongodb");

import { User } from "../../entities/User";
import { comparePassword, hashPassword } from "../../helpers/bcrypt";

interface Context {
  req: Request;
  res: Response;
}

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
    @Arg("rol", () => [String], { nullable: true }) rol: Array<String>
  ) {
    try {
      if (!name || !lastname || !mail || !username || !password) {
        throw new Error("No puede ingresar datos vacíos");
      }
      const _mail = mail.toLowerCase();
      const mailexist = await AppDataSource.manager.findOneBy(User, {
        mail: _mail,
      });
      if (mailexist) {
        throw new Error("El correo ya existe");
      }
      const userexist = await AppDataSource.manager.findOneBy(User, {
        username,
      });
      if (userexist) {
        throw new Error("El usuario ya existe");
      }
      const user = new User();
      user.name = name;
      user.lastname = lastname;
      user.mail = _mail;
      user.username = username;
      user.password = hashPassword(password);
      if (!rol || rol.length == 0) {
        user.rol = ["Student"];
      } else {
        user.rol = rol;
      }
      user.progress = [];

      await AppDataSource.manager.save(user);
      return user._id.toString();
    } catch (e: any) {
      console.log(e);
      return e;
    }
  }

  /* Elimina un usuario */
  @Mutation(() => String)
  async DeleteUser(@Arg("userId") userId: string) {
    try {
      const user = await AppDataSource.manager.findOneBy(User, {
        _id: new ObjectId(userId),
      });
      if (!user) {
        throw new Error("El usuario no existe");
      }
      await AppDataSource.manager.delete(User, user._id);
      return "Usuario eliminado";
    } catch (e: any) {
      console.log(e);
      return e;
    }
  }

  /* Consulta un usuario por medio del _id */
  @Query(() => User)
  async getUser(@Arg("userId") userId: string) {
    try {
      const user = await AppDataSource.manager.findOneBy(User, {
        _id: new ObjectId(userId),
      });
      if (!user) {
        throw new Error("El usuario no existe");
      }
      return user;
    } catch (e: any) {
      console.log(e);
      return e;
    }
  }

  /* Consultar login de usuario */
  @Query(() => User)
  async login(
    @Arg("username", { nullable: true }) username: string,
    @Arg("mail", { nullable: true }) mail: string,
    @Arg("password") password: string
  ) {
    try {
      let user = null;
      if (username) {
        user = await AppDataSource.manager.findOneBy(User, {
          username: username,
        });
      }
      if (mail) {
        user = await AppDataSource.manager.findOneBy(User, {
          mail: mail.toLowerCase(),
        });
      }
      if (!user) {
        throw new Error("El usuario no existe");
      }
      if (!comparePassword(password, user.password)) {
        throw new Error("Contraseña incorrecta");
      }
      const data = {
        _id: user._id,
        username: user.username,
        rol: user.rol,
        name: user.name,
        lastname: user.lastname,
        mail: user.mail,
        progress: user.progress,
      };

      return data;
    } catch (e: any) {
      console.log(e);
      return e;
    }
  }

  /* Consulta todos los usuarios */
  @Query(() => [User])
  async getUsers() {
    const users = await AppDataSource.manager.find(User);
    return users;
  }

  /* Actualiza un usuario */
  @Mutation(() => String)
  async updateUser(
    @Arg("userId") userId: string,
    @Arg("name", { nullable: true }) name: string,
    @Arg("lastname", { nullable: true }) lastname: string,
    @Arg("mail", { nullable: true }) mail: string,
    @Arg("username", { nullable: true }) username: string,
    @Arg("password", { nullable: true }) password: string,
    @Arg("rol", () => [String], { nullable: true }) rol: Array<String>
  ) {
    try {
      let user = await AppDataSource.manager.findOneBy(User, {
        _id: new ObjectId(userId),
      });
      if (!user) {
        throw new Error("El usuario no existe");
      }
      if (mail) {
        const _mail = mail.toLowerCase();
        const mailexist = await AppDataSource.manager.findOneBy(User, {
          mail: _mail,
        });
        if (mailexist) {
          throw new Error("El correo ya existe");
        }
      }
      if (username) {
        const userexist = await AppDataSource.manager.findOneBy(User, {
          username,
        });
        if (userexist) {
          throw new Error("El usuario ya existe");
        }
      }
      if (name) user.name = name;
      if (lastname) user.lastname = lastname;
      if (mail) user.mail = mail.toLowerCase();
      if (username) user.username = username;
      if (password) user.password = hashPassword(password);
      if (rol) user.rol = rol;
      await AppDataSource.manager.update(User, user._id, user);
      return "Usuario actualizado";
    } catch (e: any) {
      console.log(e);
      return e;
    }
  }
}
