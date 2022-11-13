import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { AppDataSource } from "../../config/typeorm";
const { ObjectId } = require("mongodb");
import { UserTopic } from "../../entities/UserTopic";
import { User } from "../../entities/User";

@Resolver()
export class UserTopicResolver {
  /* Agregar un tema en la unidad de la asignatura en el progreso del usuario */
  @Mutation(() => Boolean)
  async createUserTopic(
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

    if (unit.topic.find((topic) => topic.id_topic.toString() === topicId)) {
      return false;
    }

    const topic = new UserTopic();
    topic._id = unit.topic.length + 1;
    topic.id_topic = topicId;
    topic.nota = 0;
    topic.finished = false;
    topic.questions = [];
    unit.topic.push(topic);
    await AppDataSource.manager.update(User, user._id, user);
    return true;
  }

  /* Eliminar un tema en la unidad de la asignatura en el progreso del usuario */
  @Mutation(() => Boolean)
  async deleteUserTopic(
    @Arg("userId") userId: string,
    @Arg("progressId") progressId: string,
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
      (progress) => progress._id.toString() === progressId
    );
    if (!progress) {
      return false;
    }
    // const asignature = progress.asignature.find(
    //   (asignature) => asignature.id_asignature.toString() === asignatureId
    // );
    // if (!asignature) {
    //   return false;
    // }
    const unit = progress.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return false;
    }
    const topic = unit.topic.find((topic) => topic._id.toString() === topicId);
    if (!topic) {
      return false;
    }
    unit.topic = unit.topic.filter((topic) => topic._id.toString() !== topicId);
    progress.unit.push(unit);
    // progress.asignature.push(asignature);
    // user.progress.push(progress);
    await AppDataSource.manager.update(User, user._id, user);
    return true;
  }

  /* Obtener un tema en la unidad de la asignatura en el progreso del usuario */
  @Query(() => UserTopic)
  async getUserTopic(
    @Arg("userId") userId: string,
    @Arg("progressId") progressId: string,
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("topicId") topicId: string = ""
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
    if (topicId === "") {
      return unit.topic;
    }
    const topic = unit.topic.find((topic) => topic._id.toString() === topicId);
    if (!topic) {
      return false;
    }
    return topic;
  }

  /* Actualizar un tema en la unidad de la asignatura en el progreso del usuario */
  @Mutation(() => Boolean)
  async updateUserTopic(
    @Arg("userId") userId: string,
    @Arg("progressId") progressId: string,
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("topicId") topicId: string,
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
    const topic = unit.topic.find((topic) => topic._id.toString() === topicId);
    if (!topic) {
      return false;
    }
    if (nota) {
      topic.nota = nota;
    }
    if (finished) {
      topic.finished = finished;
    }
    const index = unit.topic.findIndex(
      (topic) => topic._id.toString() === topicId
    );
    unit.topic[index] = topic;
    const index2 = progress.unit.findIndex(
      (unit) => unit._id.toString() === unitId
    );
    progress.unit[index2] = unit;
    const index3 = user.progress.findIndex(
      (asignature) => asignature._id.toString() === asignatureId
    );
    user.progress[index3] = progress;
    const index4 = user.progress.findIndex(
      (progress) => progress._id.toString() === progressId
    );
    user.progress[index4] = progress;
    await AppDataSource.manager.update(User, user._id, user);
    return true;
  }
}
