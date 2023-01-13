import { Resolver, Mutation, Arg } from "type-graphql";
import { AppDataSource } from "../../config/typeorm";
const { ObjectId } = require("mongodb");
import { User } from "../../entities";

@Resolver()
export class UserQuestionResolver {
  /* Agregar un tema en la unidad de la asignatura en el progreso del usuario */
  // @Mutation(() => Boolean)
  // async createUserQuestion(
  //   @Arg("userId") userId: string,
  //   @Arg("asignatureId") asignatureId: string,
  //   @Arg("unitId") unitId: string,
  //   @Arg("questionId") questionId: string
  // ) {
  //   const user = await AppDataSource.manager.findOneBy(User, {
  //     id: new ObjectId(userId),
  //   });
  //   if (!user) {
  //     return false;
  //   }
  //   const progress = user.progress.find(
  //     (progress) => progress.id_asignature.toString() === asignatureId
  //   );
  //   if (!progress) {
  //     return false;
  //   }
  //   const unit = progress.unit.find(
  //     (unit) => unit.id_unit.toString() === unitId
  //   );
  //   if (!unit) {
  //     return false;
  //   }
  //   const question = new UserQuestion();
  //   question.id = new ObjectId();
  //   question.nota = 0;
  //   // question.id_question = questionId;
  //   question.isDone = false;
  //   question.response = undefined;
  //   await AppDataSource.manager.update(User, user.id, user);
  //   return true;
  // }
  // /* Guardar pregunta calificada */
  // @Mutation(() => Boolean)
  // async qualifyUnitUserQuestion(
  //   @Arg("userId") userId: string,
  //   @Arg("progressId") progressId: string,
  //   @Arg("unitId") unitId: string,
  //   @Arg("data", { nullable: true }) data: string,
  //   @Arg("nota") nota: number
  // ) {
  //   const user = await AppDataSource.manager.findOneBy(User, {
  //     id: new ObjectId(userId),
  //   });
  //   if (!user) {
  //     return false;
  //   }
  //   const progress = user.progress.find(
  //     (progress) => progress.id.toString() === progressId
  //   );
  //   if (!progress) {
  //     return false;
  //   }
  //   const unit = progress.unit.find(
  //     (unit) => unit.id_unit.toString() === unitId
  //   );
  //   if (!unit) {
  //     return false;
  //   }
  //   interface userData {
  //     nota: number;
  //     id: string;
  //     isDone: boolean;
  //   }
  //   const _data: userData[] = JSON.parse(data);
  //   if (!_data) {
  //     return false;
  //   }
  //   unit.questions = data;
  //   /* _data.map((item: userData) => {
  //     const question = unit.questions.find(
  //       (question) => question.id_question.toString() === item.id
  //     );
  //     if (!question) return false;
  //     question.nota = item.nota;
  //     question.isDone = item.isDone;
  //     nota += item.nota;
  //   }); */
  //   unit.finished = true;
  //   unit.nota = nota;
  //   await AppDataSource.manager.update(User, user.id, user);
  //   return true;
  // }
  // /* Guardar pregunta calificada */
  // @Mutation(() => Boolean)
  // async qualifyAsignatureUserQuestion(
  //   @Arg("userId") userId: string,
  //   @Arg("progressId") progressId: string,
  //   @Arg("data", { nullable: true }) data: string,
  //   @Arg("nota") nota: number
  // ) {
  //   const user = await AppDataSource.manager.findOneBy(User, {
  //     id: new ObjectId(userId),
  //   });
  //   if (!user) {
  //     return false;
  //   }
  //   const progress = user.progress.find(
  //     (progress) => progress.id.toString() === progressId
  //   );
  //   if (!progress) {
  //     return false;
  //   }
  //   interface userData {
  //     nota: number;
  //     id: string;
  //     isDone: boolean;
  //   }
  //   const _data: userData[] = JSON.parse(data);
  //   if (!_data) {
  //     return false;
  //   }
  //   progress.questions = data;
  //   progress.nota = nota;
  //   await AppDataSource.manager.update(User, user.id, user);
  //   return true;
  // }
}
