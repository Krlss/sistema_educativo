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
    unit.topic = [];

    const topicResolver = new TopicResolver();
    const topics = await topicResolver.getTopics(asignatureId, unitId);

    if (!topics) {
      return user;
    }

    if (!topics?.topic.length) {
      return user;
    }

    unit.topic = topics?.topic.map((topic: Topic) => {
      const userTopic = new UserTopic();
      userTopic._id = topic._id;
      userTopic.nota = 0;
      userTopic.id_topic = topic._id.toString();
      userTopic.questions = [];
      userTopic.finished = false;
      return userTopic;
    });

    progress.unit.push(unit);

    await AppDataSource.manager.update(User, user._id, user);
    return user;
  }

  @Mutation(() => Boolean)
  async finishedUserTopic(
    @Arg("userId") userId: string,
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("topicId") topicId: string
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
    const topic = unit.topic.find(
      (topic) => topic.id_topic.toString() === topicId
    );
    if (!topic) {
      return false;
    }
    topic.finished = !topic.finished;
    await AppDataSource.manager.update(User, user._id, user);
    return true;
  }

  // @Mutation(() => Boolean)
  // async createUserAllUnit(@Arg("userId") userId: string) {
  //   const user = await AppDataSource.manager.findOneBy(User, {
  //     _id: new ObjectId(userId),
  //   });
  //   if (!user) {
  //     return false;
  //   }

  //   if (!user.progress) {
  //     return false;
  //   }

  //   const userAsignatureResolver = new UserAsignatureResolver();
  //   // const progress = await userAsignatureResolver.getUserAsignatures(user._id);

  //   const unitResolver = new UnitResolver();
  //   const newProgress: UserAsignature[] = [];
  //   if (user.progress) {
  //     user.progress.map(async (asignature: UserAsignature) => {
  //       const units = await unitResolver.getUnits(asignature.id_asignature);
  //       const auxUnit: UserUnit[] = [];
  //       units.map((unit: Unit) => {
  //         const userUnit = new UserUnit();
  //         userUnit._id = asignature.unit.length + 1;
  //         userUnit.id_unit = unit._id.toString();
  //         userUnit.nota = 0;
  //         userUnit.topic = [];
  //         asignature.unit.push(userUnit);
  //         return asignature.unit;
  //       });
  //       return asignature;
  //     });
  //     await AppDataSource.manager.update(User, user._id, user);
  //   }
  //   return true;
  // }

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
    // const asignature = progress.asignature.find(
    //   (asignature) => asignature._id.toString() === asignatureId
    // );
    // if (!asignature) {
    //   return false;
    // }
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
    // const asignature = progress.asignature.find(
    //   (asignature) => asignature._id.toString() === asignatureId
    // );
    // if (!asignature) {
    //   return false;
    // }
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
