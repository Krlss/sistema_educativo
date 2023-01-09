import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { ObjectID } from "typeorm";
import { AppDataSource } from "../../config/typeorm";
const { ObjectId } = require("mongodb");
import {
  User,
  UserUnit,
  Asignature,
  UserAsignature,
  Unit,
  Topic,
  UserTopic,
} from "../../entities/";
import {
  AsignatureResolver,
  UnitResolver,
  TopicResolver,
} from "../Asignature/";
import { UserAsignatureResolver } from "./";

@Resolver()
export class UserUnitResolver {
  /* Crear una nueva unidad de asignatura en el progreso del usuario */
  @Mutation(() => User)
  async createUserUnit(
    @Arg("userId") userId: string,
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string
  ) {
    const user = await AppDataSource.manager.findOneBy(User, {
      _id: new ObjectId(userId),
    });
    if (!user) {
      return false;
    }
    const progress = user.progress.find(
      (progress) => progress.id_asignature.toString() === asignatureId
    );
    if (!progress) {
      return false;
    }

    if (progress.unit.find((unit) => unit.id_unit.toString() === unitId)) {
      return user;
    }

    const unit = new UserUnit();
    unit._id = new ObjectId();
    unit.id_unit = unitId;
    unit.nota = 0;
    unit.finished = false;

    progress.unit.push(unit);

    await AppDataSource.manager.update(User, user._id, user);
    return user;
  }

  @Mutation(() => Boolean)
  async finishedUserUnit(
    @Arg("userId") userId: string,
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string
  ) {
    const user = await AppDataSource.manager.findOneBy(User, {
      _id: new ObjectId(userId),
    });
    if (!user) {
      return false;
    }
    const progress = user.progress.find(
      (progress) => progress.id_asignature.toString() === asignatureId
    );
    if (!progress) {
      return false;
    }
    const unit = progress.unit.find(
      (unit) => unit.id_unit.toString() === unitId
    );
    if (!unit) {
      return false;
    }
    unit.finished = !unit.finished;
    await AppDataSource.manager.update(User, user._id, user);
    return true;
  }

  /* Eliminar unidades de una asignatura en el progreso del usuario */
  @Mutation(() => Boolean)
  async deleteUserUnit(
    @Arg("userId") userId: string,
    @Arg("progressId") progressId: string,
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string
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
    const unit = progress.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return false;
    }
    const index = progress.unit.indexOf(unit);
    progress.unit.splice(index, 1);
    user.progress.push(progress);
    user.progress.push(progress);
    await AppDataSource.manager.update(User, user._id, user);
    return true;
  }

  /* Consulta la unidad de asignatura en el progreso del usuario */
  @Query(() => [UserUnit])
  async getUserUnit(
    @Arg("userId") userId: string,
    @Arg("progressId") progressId: string,
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string = ""
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
    if (unitId === "") {
      return progress.unit;
    }
    const unit = progress.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return false;
    }
    return unit;
  }

  /* Actualizar la nota de una unidad de asignatura en el progreso del usuario */
  @Mutation(() => Boolean)
  async updateUserUnitNota(
    @Arg("userId") userId: string,
    @Arg("progressId") progressId: string,
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("nota", { nullable: true }) nota: number,
    @Arg("finished", { nullable: true }) finished: boolean
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
    const unit = progress.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return false;
    }
    if (nota) unit.nota = nota;
    if (finished) unit.finished = finished;
    await AppDataSource.manager.update(User, user._id, user);
    return true;
  }
}
