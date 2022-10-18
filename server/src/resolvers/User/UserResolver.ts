import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { AppDataSource } from "../../config/typeorm";
import { ObjectID } from 'typeorm';

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
    @Arg("rol", type => [String]) rol: string[], 
  ) {
    const user = new User();
    user.name = name;
    user.lastname = lastname;
    user.mail = mail;
    user.username = username;
    user.password =  hashPassword(password);
    if (rol.length == 0) {
      user.rol = ["Estudiante"];
    }
    user.progress = [];
    await AppDataSource.manager.save(user);
    return user._id.toString();
  }

    /* Elimina un usuario */
    @Mutation(()=>Boolean)
    async DeleteUser(
        @Arg("userId") userId: string ){
        const user = await AppDataSource.manager.findOneBy(User, {
            _id: new ObjectID(userId)
        })
        if (!user){
            return false;
        }
        await AppDataSource.manager.delete(User, user._id);
        return true;
    }

    /* Consulta un usuario por medio del _id */
    @Query(()=>[User])
    async getUser(
        @Arg("userId") userId: string, 
        @Arg("password") password: string = "" ){
        const user = await AppDataSource.manager.findOneBy(User, {
            _id: new ObjectID(userId)
        })
        if (!user){
            return false;
        }
        if (password == ""){
            return user;
        }
        if (comparePassword(password, user.password)){
            return user;
        }
        return false;
    }

    /* Consulta todos los usuarios */
    @Query(()=>[User])
    async getUsers(){
        const users = await AppDataSource.manager.find(User);
        return users;
    }

    /* Actualiza un usuario */
    @Mutation(()=>Boolean)
    async updateUser(
        @Arg("userId") userId: string,
        @Arg("name") name: string,
        @Arg("lastname") lastname: string,
        @Arg("mail") mail: string,
        @Arg("username") username: string,
        @Arg("password") password: string,
        @Arg("rol", type => [String]) rol: string[], 
        ){
        let user = await AppDataSource.manager.findOneBy(User, {
            _id: new ObjectID(userId)
        })
        if (!user){
            return false;
        }
        user.name = name;
        user.lastname = lastname;
        user.mail = mail;
        user.username = username;
        user.password = hashPassword(password);
        user.rol = [...new Set<string>(user.rol.concat(rol))];
        await AppDataSource.manager.save(user);
        return true;
    }

}
