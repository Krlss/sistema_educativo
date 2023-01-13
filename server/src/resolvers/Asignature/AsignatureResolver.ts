import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Asignature } from "../../entities/Asignature";
import { AppDataSource } from "../../config/typeorm";
import { User } from "../../entities/User";
import { getGoogleDriveId } from "../../utils/image";
const { ObjectId } = require("mongodb");
@Resolver()
export class AsignatureResolver {
  /* Crea una nueva materia con un arreglo de unidades vacio */
  // @Mutation(() => String)
  // async createAsignature(
  //   @Arg("name") name: string,
  //   @Arg("description") description: string,
  //   @Arg("image") image: string
  // ) {
  //   const asignature = new Asignature();
  //   asignature.name = name;
  //   asignature.description = description;
  //   const aux = getGoogleDriveId(image);
  //   if (aux) asignature.image = aux ?? "";
  //   await AppDataSource.manager.save(asignature);
  //   return asignature.id.toString();
  // }
  /* Elimina una materia */
  // @Mutation(() => Boolean)
  // async DeleteAsignature(@Arg("id") id: string) {
  //   await AppDataSource.manager.delete(Asignature, id);
  //   return true;
  // }
  /* Consulta una materia por medio del id */
  // @Query(() => Asignature)
  // async getAsignature(@Arg("id") id: string) {
  //   const asignature = await AppDataSource.manager.findOneBy(Asignature, {
  //     id: new ObjectId(id),
  //   });
  //   console.log(asignature);
  //   return asignature;
  // }
  /* Consulta todas las materias */
  // @Query(() => [Asignature])
  // async getAsignatures() {
  //   const asignatures = await AppDataSource.manager.find(Asignature);
  //   return asignatures;
  // }
  /* Actualiza las materias */
  // @Mutation(() => Boolean)
  // async updateAsignature(
  //   @Arg("id") id: string,
  //   @Arg("name", { nullable: true }) name: string,
  //   @Arg("description", { nullable: true }) description: string,
  //   @Arg("image", { nullable: true }) image: string
  // ) {
  //   let asignature = await AppDataSource.manager.findOneBy(Asignature, {
  //     id: new ObjectId(id),
  //   });
  //   if (!asignature) {
  //     return false;
  //   }
  //   if (name) asignature.name = name;
  //   if (description) asignature.description = description;
  //   if (image) {
  //     const aux = getGoogleDriveId(image);
  //     if (aux) asignature.image = aux;
  //   }
  //   await AppDataSource.manager.update(Asignature, asignature.id, asignature);
  //   return true;
  // }
  // @Query(() => [Asignature])
  // async getUserAsignatures(@Arg("userId") userId: string) {
  //   const user = await AppDataSource.manager.findOneBy(User, {
  //     id: new ObjectId(userId),
  //   });
  //   if (!user) {
  //     throw new Error("El usuario no existe");
  //   }
  //   return user.progress;
  // }
}
