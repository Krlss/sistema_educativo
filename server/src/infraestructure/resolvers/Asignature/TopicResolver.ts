import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Asignature } from "../../domain/asignatures/Asignature";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import {
  getGoogleDriveId,
  getUrlEmbedYT,
} from "../../infraestructure/utils/image";
const { ObjectId } = require("mongodb");
import { Topic, Unit } from "../../infraestructure/entities";

@Resolver()
export class TopicResolver {
  /* Crea un nuevo tema con un arreglo de subtemas vacio */
  // @Mutation(() => String)
  // async createTopic(
  //   @Arg("name") name: string,
  //   @Arg("description", { nullable: true }) description: string,
  //   @Arg("video") video: string,
  //   @Arg("asignatureId") asignatureId: string,
  //   @Arg("unitId") unitId: string
  // ) {
  //   const asignature = await AppDataSource.manager.findOneBy(Asignature, {
  //     id: new ObjectId(asignatureId),
  //   });
  //   if (!asignature) {
  //     return false;
  //   }
  //   const unit = asignature.unit.find((unit) => unit.id.toString() === unitId);
  //   if (!unit) {
  //     return false;
  //   }
  //   const topic = new Topic();
  //   topic.id = new ObjectId();
  //   topic.name = name;
  //   const auxdesc = getGoogleDriveId(description);
  //   topic.description = auxdesc ?? "";
  //   const auxvid = getUrlEmbedYT(video);
  //   topic.video = auxvid ?? "";
  //   topic.question = [];
  //   unit.topic.push(topic);
  //   const index = asignature.unit.findIndex(
  //     (unit) => unit.id.toString() === unitId
  //   );
  //   asignature.unit[index] = unit;
  //   await AppDataSource.manager.update(Asignature, asignature.id, asignature);
  //   return topic.id;
  // }
  // /* Elimina un tema */
  // @Mutation(() => Boolean)
  // async DeleteTopic(
  //   @Arg("asignatureId") asignatureId: string,
  //   @Arg("unitId") unitId: string,
  //   @Arg("topicId") topicId: string
  // ) {
  //   const asignature = await AppDataSource.manager.findOneBy(Asignature, {
  //     id: new ObjectId(asignatureId),
  //   });
  //   if (!asignature) {
  //     return false;
  //   }
  //   const unit = asignature.unit.find((unit) => unit.id.toString() === unitId);
  //   if (!unit) {
  //     return false;
  //   }
  //   const topic = unit.topic.find((topic) => topic.id.toString() === topicId);
  //   if (!topic) {
  //     return false;
  //   }
  //   unit.topic = unit.topic.filter((topic) => topic.id.toString() !== topicId);
  //   const index = asignature.unit.findIndex(
  //     (unit) => unit.id.toString() === unitId
  //   );
  //   asignature.unit[index] = unit;
  //   await AppDataSource.manager.update(Asignature, asignature.id, asignature);
  //   return true;
  // }
  // /* Consulta un tema por medio del id */
  // @Query(() => Unit)
  // async getTopic(
  //   @Arg("asignatureId") asignatureId: string,
  //   @Arg("unitId") unitId: string,
  //   @Arg("topicId") topicId: string
  // ) {
  //   const asignature = await AppDataSource.manager.findOneBy(Asignature, {
  //     id: new ObjectId(asignatureId),
  //   });
  //   if (!asignature) {
  //     return false;
  //   }
  //   const unit = asignature.unit.find((unit) => unit.id.toString() === unitId);
  //   if (!unit) {
  //     return false;
  //   }
  //   const topic = unit.topic.find((topic) => topic.id.toString() === topicId);
  //   if (!topic) {
  //     return false;
  //   }
  //   return topic;
  // }
  // /* Consulta todos los temas de una unidad */
  // @Query(() => Unit)
  // async getTopics(
  //   @Arg("asignatureId") asignatureId: string,
  //   @Arg("unitId") unitId: string
  // ) {
  //   const asignature = await AppDataSource.manager.findOneBy(Asignature, {
  //     id: new ObjectId(asignatureId),
  //   });
  //   if (!asignature) {
  //     return false;
  //   }
  //   const unit = asignature.unit.find((unit) => unit.id.toString() === unitId);
  //   if (!unit) {
  //     return false;
  //   }
  //   unit.asignature_name = asignature.name;
  //   return unit;
  // }
  // /* Actualiza un tema */
  // @Mutation(() => Boolean)
  // async updateTopic(
  //   @Arg("asignatureId") asignatureId: string,
  //   @Arg("unitId") unitId: string,
  //   @Arg("topicId") topicId: string,
  //   @Arg("name", { nullable: true }) name: string,
  //   @Arg("description", { nullable: true }) description: string,
  //   @Arg("video", { nullable: true }) video: string
  // ) {
  //   const asignature = await AppDataSource.manager.findOneBy(Asignature, {
  //     id: new ObjectId(asignatureId),
  //   });
  //   if (!asignature) {
  //     return false;
  //   }
  //   const unit = asignature.unit.find((unit) => unit.id.toString() === unitId);
  //   if (!unit) {
  //     return false;
  //   }
  //   const topic = unit.topic.find((topic) => topic.id.toString() === topicId);
  //   if (!topic) {
  //     return false;
  //   }
  //   if (name) {
  //     topic.name = name;
  //   }
  //   if (description) {
  //     const aux = getGoogleDriveId(description);
  //     if (aux) topic.description = aux ?? "";
  //   }
  //   if (video) {
  //     const aux = getUrlEmbedYT(video);
  //     topic.video = aux ?? "";
  //   }
  //   await AppDataSource.manager.update(Asignature, asignature.id, asignature);
  //   return true;
  // }
}
