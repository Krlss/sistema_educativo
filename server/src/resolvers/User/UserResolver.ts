import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { AppDataSource } from "../../config/typeorm";
const { ObjectId } = require("mongodb");

import { AsignatureResolver } from "../Asignature";
import { comparePassword, hashPassword } from "../../helpers/bcrypt";
import { Rol, User } from "../../entities";
import { In } from "typeorm";
import { CreateUserInputs } from "../../validations/CreateUserInputs";

@Resolver()
export class UserResolver {
  @Mutation(() => Boolean)
  async createUser(
    @Arg("data") { name, email, lastname, password, rol }: CreateUserInputs
  ) {
    try {
      const _rol = await AppDataSource.manager.find(Rol, {
        where: {
          id: In(rol),
        },
      });

      const user = new User();
      user.name = name;
      user.lastName = lastname;
      user.email = email;
      user.userRols = _rol;
      user.password = hashPassword(password);
      await AppDataSource.manager.save(user);

      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Query(() => [User])
  async getUsers() {
    const users = await AppDataSource.manager.find(User);
    if (!users) {
      throw new Error("No hay usuarios");
    }
    return users;
  }

  @Query(() => User)
  async getUser(@Arg("id") id: number) {
    const user = await AppDataSource.manager.findOne(User, {
      where: {
        id,
      },
    });
    if (!user) {
      throw new Error("El usuario no existe");
    }
    return user;
  }

  @Query(() => [User])
  async getUserByRol(@Arg("rol") rol: string) {
    const users = await AppDataSource.manager.find(User, {
      where: {
        userRols: {
          name: rol,
        },
      },
    });
    return users;
  }

  /* @Mutation(() => Boolean)
  async updateUser(
    @Arg("id") id: number,
    @Arg("name") name: string,
    @Arg("lastname") lastname: string,
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("rol", { nullable: true }) rol: number
  ) {
    try {
      if (!name || !lastname || !email || !password) {
        throw new Error("No puede ingresar datos vacíos");
      }
      const _mail = email.toLowerCase();
      const mailexist = await AppDataSource.manager.findOneBy(User, {
        email: _mail,
      });
      if (mailexist) {
        throw new Error("El correo ya existe");
      }
      const _rol = await AppDataSource.manager.findOneBy(Rol, {
        id: rol || 3,
      });
      if (!_rol) {
        throw new Error("El rol no existe");
      }
      const user = await AppDataSource.manager.findOneBy(User, {
        id,
      });
      if (!user) {
        throw new Error("El usuario no existe");
      }
      user.name = name;
      user.lastName = lastname;
      user.email = _mail;
      user.userRols = [_rol];
      user.password = hashPassword(password);
      await AppDataSource.manager.save(user);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  } */

  /* Crea un nuevo usuario con progreso 0*/
  // @Mutation(() => String)
  // async createUser(
  //   @Arg("name") name: string,
  //   @Arg("lastname") lastname: string,
  //   @Arg("mail") mail: string,
  //   @Arg("username") username: string,
  //   @Arg("password") password: string
  // ) {
  //   try {
  //     if (!name || !lastname || !mail || !username || !password) {
  //       throw new Error("No puede ingresar datos vacíos");
  //     }
  //     const _mail = mail.toLowerCase();
  //     const mailexist = await AppDataSource.manager.findOneBy(User, {
  //       mail: _mail,
  //     });
  //     if (mailexist) {
  //       throw new Error("El correo ya existe");
  //     }
  //     const userexist = await AppDataSource.manager.findOneBy(User, {
  //       username,
  //     });
  //     if (userexist) {
  //       throw new Error("El usuario ya existe");
  //     }
  //     const user = new User();
  //     user.name = name;
  //     user.lastname = lastname;
  //     user.mail = _mail;
  //     user.username = username;
  //     user.password = hashPassword(password);
  //     user.progress = [];
  //     const asignature = new AsignatureResolver();
  //     // const asignatures = await asignature.getAsignatures();
  //     // asignatures.forEach(async (asignature: any) => {
  //     //   const asig = new UserAsignature();
  //     //   asig.id = new ObjectId();
  //     //   asig.unit = [];
  //     //   asig.nota = 0;
  //     //   asig.id_asignature = asignature.id;
  //     //   user.progress.push(asig);
  //     // });
  //     await AppDataSource.manager.save(user);
  //     return user.id.toString();
  //   } catch (e: any) {
  //     console.log(e);
  //     return e;
  //   }
  // }
  // /* Elimina un usuario */
  // @Mutation(() => String)
  // async DeleteUser(@Arg("userId") userId: string) {
  //   try {
  //     const user = await AppDataSource.manager.findOneBy(User, {
  //       id: new ObjectId(userId),
  //     });
  //     if (!user) {
  //       throw new Error("El usuario no existe");
  //     }
  //     await AppDataSource.manager.delete(User, user.id);
  //     return "Usuario eliminado";
  //   } catch (e: any) {
  //     console.log(e);
  //     return e;
  //   }
  // }
  // /* Consulta un usuario por medio del id */
  // @Query(() => User)
  // async getUser(@Arg("userId") userId: string) {
  //   try {
  //     const user = await AppDataSource.manager.findOneBy(User, {
  //       id: new ObjectId(userId),
  //     });
  //     if (!user) {
  //       throw new Error("El usuario no existe");
  //     }
  //     return user;
  //   } catch (e: any) {
  //     console.log(e);
  //     return e;
  //   }
  // }
  // /* Consultar login de usuario */
  // @Query(() => User)
  // async login(
  //   @Arg("username", { nullable: true }) username: string,
  //   @Arg("mail", { nullable: true }) mail: string,
  //   @Arg("password") password: string,
  //   @Arg("rememberMe") rememberMe: boolean
  // ) {
  //   try {
  //     let user: any;
  //     if (username) {
  //       user = await AppDataSource.manager.findOneBy(User, {
  //         username: username,
  //       });
  //     }
  //     if (mail) {
  //       user = await AppDataSource.manager.findOneBy(User, {
  //         mail: mail.toLowerCase(),
  //       });
  //     }
  //     if (!user) {
  //       throw new Error("El usuario no existe");
  //     }
  //     if (!comparePassword(password, user.password)) {
  //       throw new Error("Contraseña incorrecta");
  //     }
  //     const asignature = new AsignatureResolver();
  // const asignatures = await asignature.getAsignatures();
  // if (asignatures) {
  //   asignatures.forEach((asig: Asignature) => {
  //     const aux = user.progress.filter((item: UserAsignature) => {
  //       return item.id_asignature === asig.id.toString();
  //     });
  //     if (!aux) {
  //       const auxasig = new UserAsignature();
  //       auxasig.id = user.progress.length + 1;
  //       auxasig.unit = [];
  //       auxasig.nota = 0;
  //       auxasig.id_asignature = asig.id.toString();
  //       user.progress.push(auxasig);
  //     }
  //   });
  //   const auxprogress = user.progress.filter((item: UserAsignature) =>
  //     asignatures.some(
  //       (asig: Asignature) => asig.id.toString() == item.id_asignature
  //     )
  //   );
  //   if (auxprogress.length) {
  //     user.progress = auxprogress;
  //   }
  //   if (!user.progress.length) {
  //     asignatures.forEach((asig: Asignature) => {
  //       const auxasig = new UserAsignature();
  //       auxasig.id = new ObjectId();
  //       auxasig.unit = [];
  //       auxasig.nota = 0;
  //       auxasig.id_asignature = asig.id.toString();
  //       user.progress.push(auxasig);
  //     });
  //     await AppDataSource.manager.update(User, user.id, user);
  //   }
  // }
  //     const data = {
  //       id: user.id,
  //       username: user.username,
  //       rol: user.rol,
  //       name: user.name,
  //       lastname: user.lastname,
  //       mail: user.mail,
  //       progress: user.progress,
  //       rememberMe: rememberMe,
  //     };
  //     return data;
  //   } catch (e: any) {
  //     console.log(e);
  //     return e;
  //   }
  // }
  // /* Consulta todos los usuarios */
  // @Query(() => [User])
  // async getUsers() {
  //   const users = await AppDataSource.manager.find(User);
  //   return users;
  // }
  // /* Actualiza un usuario */
  // @Mutation(() => String)
  // async updateUser(
  //   @Arg("userId") userId: string,
  //   @Arg("name", { nullable: true }) name: string,
  //   @Arg("lastname", { nullable: true }) lastname: string,
  //   @Arg("mail", { nullable: true }) mail: string,
  //   @Arg("username", { nullable: true }) username: string,
  //   @Arg("password", { nullable: true }) password: string
  // ) {
  //   try {
  //     let user = await AppDataSource.manager.findOneBy(User, {
  //       id: new ObjectId(userId),
  //     });
  //     if (!user) {
  //       throw new Error("El usuario no existe");
  //     }
  //     if (mail) {
  //       const _mail = mail.toLowerCase();
  //       const mailexist = await AppDataSource.manager.findOneBy(User, {
  //         mail: _mail,
  //       });
  //       if (mailexist) {
  //         throw new Error("El correo ya existe");
  //       }
  //     }
  //     if (username) {
  //       const userexist = await AppDataSource.manager.findOneBy(User, {
  //         username,
  //       });
  //       if (userexist) {
  //         throw new Error("El usuario ya existe");
  //       }
  //     }
  //     if (name) user.name = name;
  //     if (lastname) user.lastname = lastname;
  //     if (mail) user.mail = mail.toLowerCase();
  //     if (username) user.username = username;
  //     if (password) user.password = hashPassword(password);
  //     await AppDataSource.manager.update(User, user.id, user);
  //     return "Usuario actualizado";
  //   } catch (e: any) {
  //     console.log(e);
  //     return e;
  //   }
  // }
}
