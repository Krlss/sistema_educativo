import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Asignature } from "../../entities/Asignature";
import { AppDataSource } from "../../config/typeorm";
import { User } from "../../entities/User";
const { ObjectId } = require("mongodb");
@Resolver()
export class AsignatureResolver {
  /* Crea una nueva materia con un arreglo de unidades vacio */
  @Mutation(() => String)
  async createAsignature(
    @Arg("name") name: string,
    @Arg("description") description: string
  ) {
    const asignature = new Asignature();
    asignature.name = name;
    asignature.description = description;
    asignature.unit = [];
    await AppDataSource.manager.save(asignature);
    return asignature._id.toString();
  }

  /* Elimina una materia */
  @Mutation(() => Boolean)
  async DeleteAsignature(@Arg("id") id: string) {
    await AppDataSource.manager.delete(Asignature, id);
    return true;
  }

  /* Consulta una materia por medio del _id */
  @Query(() => Asignature)
  async getAsignature(@Arg("id") id: string) {
    const asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(id),
    });
    console.log(asignature);
    return asignature;
  }

  /* Consulta todas las materias */
  @Query(() => [Asignature])
  async getAsignatures() {
    const asignatures = await AppDataSource.manager.find(Asignature);
    return asignatures;
  }

  /* Actualiza las materias */
  @Mutation(() => Boolean)
  async updateAsignature(@Arg("id") id: string, @Arg("name") name: string) {
    let asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(id),
    });
    if (!asignature) {
      return false;
    }
    asignature.name = name;
    await AppDataSource.manager.update(Asignature, asignature._id, asignature);
    return true;
  }

  @Query(() => [Asignature])
  async getUserAsignatures(@Arg("userId") userId: string) {
    const user = await AppDataSource.manager.findOneBy(User, {
      _id: new ObjectId(userId),
    });
    if (!user) {
      throw new Error("El usuario no existe");
    }
    return user.progress;
  }
}
