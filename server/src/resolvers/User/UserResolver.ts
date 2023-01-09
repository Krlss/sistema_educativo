import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { AppDataSource } from "../../config/typeorm";
const { ObjectId } = require("mongodb");

import { User, UserAsignature, Asignature } from "../../entities/";
import { AsignatureResolver } from "../Asignature";
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
      if (!rol || !rol.length) {
        user.rol = ["Student"];
      } else {
        user.rol = rol;
      }
      user.progress = [];

      const asignature = new AsignatureResolver();

      const asignatures = await asignature.getAsignatures();

      asignatures.forEach(async (asignature: any) => {
        const asig = new UserAsignature();
        asig._id = new ObjectId();
        asig.unit = [];
        asig.nota = 0;
        asig.id_asignature = asignature._id;
        user.progress.push(asig);
      });
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
    @Arg("password") password: string,
    @Arg("rememberMe") rememberMe: boolean
  ) {
    try {
      let user: any;
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

      const asignature = new AsignatureResolver();
      const asignatures = await asignature.getAsignatures();

      if (asignatures) {
        asignatures.forEach((asig: Asignature) => {
          const aux = user.progress.filter((item: UserAsignature) => {
            return item.id_asignature === asig._id.toString();
          });
          if (!aux) {
            const auxasig = new UserAsignature();
            auxasig._id = user.progress.length + 1;
            auxasig.unit = [];
            auxasig.nota = 0;
            auxasig.id_asignature = asig._id.toString();
            user.progress.push(auxasig);
          }
        });
        const auxprogress = user.progress.filter((item: UserAsignature) =>
          asignatures.some(
            (asig: Asignature) => asig._id.toString() == item.id_asignature
          )
        );
        if (auxprogress.length) {
          user.progress = auxprogress;
        }
        if (!user.progress.length) {
          asignatures.forEach((asig: Asignature) => {
            const auxasig = new UserAsignature();
            auxasig._id = new ObjectId();
            auxasig.unit = [];
            auxasig.nota = 0;
            auxasig.id_asignature = asig._id.toString();
            user.progress.push(auxasig);
          });
          await AppDataSource.manager.update(User, user._id, user);
        }
      }

      const data = {
        _id: user._id,
        username: user.username,
        rol: user.rol,
        name: user.name,
        lastname: user.lastname,
        mail: user.mail,
        progress: user.progress,
        rememberMe: rememberMe,
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
