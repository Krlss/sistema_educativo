import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Asignature } from "../../entities/Asignature";
import { AppDataSource } from "../../config/typeorm";
import { getGoogleDriveId } from "../../utils/image";
const { ObjectId } = require("mongodb");
import { Topic, Unit } from "../../entities";

@Resolver()
export class TopicResolver {
  /* Crea un nuevo tema con un arreglo de subtemas vacio */
  @Mutation(() => String)
  async createTopic(
    @Arg("name") name: string,
    @Arg("description", { nullable: true }) description: string,
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
    topic._id = new ObjectId();
    topic.name = name;
    const aux = getGoogleDriveId(description);
    topic.description = aux ?? "";
    topic.video = video;
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
  @Query(() => Unit)
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
  @Query(() => Unit)
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

    unit.asignature_name = asignature.name;
    return unit;
  }

  /* Actualiza un tema */
  @Mutation(() => Boolean)
  async updateTopic(
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("topicId") topicId: string,
    @Arg("name", { nullable: true }) name: string,
    @Arg("description", { nullable: true }) description: string,
    @Arg("video", { nullable: true }) video: string
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
    if (name) {
      topic.name = name;
    }
    if (description) {
      const aux = getGoogleDriveId(description);
      if (aux) asignature.description = aux ?? "";
    }
    if (video) {
      topic.video = video;
    }
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
