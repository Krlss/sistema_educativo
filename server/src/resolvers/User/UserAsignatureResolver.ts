import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { AppDataSource } from "../../config/typeorm";
const { ObjectId } = require("mongodb");
import { UserAsignature } from "../../entities/UserAsignature";
import { User } from "../../entities/User";

@Resolver()
export class UserAsignatureResolver {
  /* Crea una nueva asignatura en el progreso del usuario */
  @Mutation(() => String)
  async createUserAsignature(
    @Arg("userId") userId: string,
    @Arg("asignatureId") asignatureId: string
  ) {
    const user = await AppDataSource.manager.findOneBy(User, {
      _id: new ObjectId(userId),
    });
    if (!user) {
      return false;
    }
    // const progress = user.progress.find(
    //   (progress) => progress._id.toString() === progressId
    // );
    // if (!progress) {
    //   return false;
    // }

    const asignature = new UserAsignature();
    asignature._id = user.progress.length + 1;
    asignature.unit = [];
    asignature.nota = 0;
    asignature.id_asignature = asignatureId;
    user.progress.push(asignature);
    // user.progress.push(progress);
    await AppDataSource.manager.update(User, user._id, user);
    return asignature._id.toString();
  }
  /* Eliminar una nueva asignatura en el progreso del usuario */
  @Mutation(() => Boolean)
  async deleteUserAsignature(
    @Arg("userId") userId: string,
    @Arg("progressId") progressId: string,
    @Arg("asignatureId") asignatureId: string
  ) {
    const user = await AppDataSource.manager.findOneBy(User, {
      _id: new ObjectId(userId),
    });
    if (!user) {
      return false;
    }
    const progress = user.progress.find(
      (progress) => progress._id.toString() === progressId
    );
    if (!progress) {
      return false;
    }
    // const asignature = progress.asignature.find(
    //   (asignature) => asignature._id.toString() === asignatureId
    // );
    // if (!asignature) {
    //   return false;
    // }
    // progress.asignature = progress.asignature.filter(
    //   (asignature) => asignature._id.toString() !== asignatureId
    // );
    user.progress.push(progress);
    await AppDataSource.manager.update(User, user._id, user);
    return true;
  }
  /* Consulta una asignatura en el progreso del usuario */
  // @Query(() => [UserAsignature])
  // async getUserAsignatureId(
  //   @Arg("userId") userId: string,
  //   @Arg("progressId") progressId: string,
  //   @Arg("asignatureId") asignatureId: string
  // ) {
  //   const user = await AppDataSource.manager.findOneBy(User, {
  //     _id: new ObjectId(userId),
  //   });
  //   if (!user) {
  //     return false;
  //   }
  //   const progress = user.progress.find(
  //     (progress) => progress._id.toString() === progressId
  //   );
  //   if (!progress) {
  //     return false;
  //   }
  //   const asignature = progress.asignature.find(
  //     (asignature) => asignature._id.toString() === asignatureId
  //   );
  //   if (!asignature) {
  //     return false;
  //   }
  //   return asignature;
  // }
  /* Consulta todas las asignaturas en el progreso del usuario */
  @Query(() => [UserAsignature])
  async getUserAsignatures(
    @Arg("userId") userId: string,
    @Arg("progressId") progressId: string
  ) {
    const user = await AppDataSource.manager.findOneBy(User, {
      _id: new ObjectId(userId),
    });
    if (!user) {
      return false;
    }
    const progress = user.progress.find(
      (progress) => progress._id.toString() === progressId
    );
    if (!progress) {
      return false;
    }
    return progress;
  }
  /* Actualiza una asignatura en el progreso del usuario */
  @Mutation(() => Boolean)
  async updateUserAsignature(
    @Arg("userId") userId: string,
    @Arg("progressId") progressId: string,
    @Arg("asignatureId") asignatureId: string,
    @Arg("nota") nota: number
  ) {
    const user = await AppDataSource.manager.findOneBy(User, {
      _id: new ObjectId(userId),
    });
    if (!user) {
      return false;
    }
    const progress = user.progress.find(
      (progress) => progress._id.toString() === progressId
    );
    if (!progress) {
      return false;
    }
    // const asignature = progress.asignature.find(
    //   (asignature) => asignature._id.toString() === asignatureId
    // );
    // if (!asignature) {
    //   return false;
    // }
    progress.nota = nota;
    const index = user.progress.findIndex(
      (asignature) => asignature._id.toString() === asignatureId
    );
    user.progress[index] = progress;
    const index2 = user.progress.findIndex(
      (progress) => progress._id.toString() === progressId
    );
    user.progress[index2] = progress;
    await AppDataSource.manager.update(User, user._id, user);
    return true;
  }
}
