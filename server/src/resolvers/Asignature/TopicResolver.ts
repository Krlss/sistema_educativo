import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Asignature } from "../../entities/Asignature";
import { AppDataSource } from "../../config/typeorm";
const { ObjectId } = require("mongodb");
import { Topic } from "../../entities/Topic";

@Resolver()
export class TopicResolver {
  /* Crea un nuevo tema con un arreglo de subtemas vacio */
  @Mutation(() => String)
  async createTopic(
    @Arg("name") name: string,
    @Arg("desciption") desciption: string,
    @Arg("video") video: string,
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string
  ) {
    const asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(asignatureId),
    });
    if (!asignature) {
      return false;
    }
    const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return false;
    }
    const topic = new Topic();
    topic._id = unit.topic.length + 1;
    topic.name = name;
    topic.question = [];
    unit.topic.push(topic);
    const index = asignature.unit.findIndex(
      (unit) => unit._id.toString() === unitId
    );
    asignature.unit[index] = unit;
    await AppDataSource.manager.update(Asignature, asignature._id, asignature);
    return topic._id;
  }

  /* Elimina un tema */
  @Mutation(() => Boolean)
  async DeleteTopic(
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("topicId") topicId: string
  ) {
    const asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(asignatureId),
    });
    if (!asignature) {
      return false;
    }
    const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return false;
    }
    const topic = unit.topic.find((topic) => topic._id.toString() === topicId);
    if (!topic) {
      return false;
    }
    unit.topic = unit.topic.filter((topic) => topic._id.toString() !== topicId);
    const index = asignature.unit.findIndex(
      (unit) => unit._id.toString() === unitId
    );
    asignature.unit[index] = unit;
    await AppDataSource.manager.update(Asignature, asignature._id, asignature);
    return true;
  }

  /* Consulta un tema por medio del _id */
  @Query(() => [Topic])
  async getTopic(
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("topicId") topicId: string
  ) {
    const asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(asignatureId),
    });
    if (!asignature) {
      return false;
    }
    const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return false;
    }
    const topic = unit.topic.find((topic) => topic._id.toString() === topicId);
    if (!topic) {
      return false;
    }
    return topic;
  }

  /* Consulta todos los temas de una unidad */
  @Query(() => [Topic])
  async getTopics(
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string
  ) {
    const asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(asignatureId),
    });
    if (!asignature) {
      return false;
    }
    const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return false;
    }
    return unit.topic;
  }

  /* Actualiza el nombre de un tema */
  @Mutation(() => Boolean)
  async updateTopicName(
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("topicId") topicId: string,
    @Arg("name") name: string
  ) {
    const asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(asignatureId),
    });
    if (!asignature) {
      return false;
    }
    const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return false;
    }
    const topic = unit.topic.find((topic) => topic._id.toString() === topicId);
    if (!topic) {
      return false;
    }
    topic.name = name;
    const index = unit.topic.findIndex(
      (topic) => topic._id.toString() === topicId
    );
    unit.topic[index] = topic;
    const index2 = asignature.unit.findIndex(
      (unit) => unit._id.toString() === unitId
    );
    asignature.unit[index2] = unit;
    await AppDataSource.manager.update(Asignature, asignature._id, asignature);
    return true;
  }
}
