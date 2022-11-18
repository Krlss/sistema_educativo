import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { AppDataSource } from "../../config/typeorm";
const { ObjectId } = require("mongodb");
import { User, Question, UserAsignature, UserQuestion } from "../../entities/";
import { QuestionResolver } from "../Asignature/";

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

    const asignature = new UserAsignature();
    asignature._id = new ObjectId();
    asignature.unit = [];
    asignature.nota = 0;
    asignature.id_asignature = asignatureId;
    asignature.questions = [];
    user.progress.push(asignature);

    // await AppDataSource.manager.save(user);
    await AppDataSource.manager.update(User, user._id, user);
    return user.progress;
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
  async getUserProgress(@Arg("userId") userId: string) {
    const user = await AppDataSource.manager.findOneBy(User, {
      _id: new ObjectId(userId),
    });
    if (!user) {
      return false;
    }
    return user.progress;
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

  // @Mutation(() => [Question])
  // async asignRandomAsignatureQuestions(
  //   @Arg("asignatureId") asignatureId: string,
  //   @Arg("userId") userId: string
  // ) {
  //   const user = await AppDataSource.manager.findOneBy(User, {
  //     _id: new ObjectId(userId),
  //   });

  //   if (!user) {
  //     return [];
  //   }

  //   if (user.progress) {
  //     const userprogress = user.progress.find(
  //       (progress) => progress.id_asignature.toString() === asignatureId
  //     );
  //     if (userprogress) {
  //       if (!userprogress.questions) {
  //         const questionResolver = new QuestionResolver();
  //         const questions = [];
  //         questions.push(
  //           userprogress.unit
  //             .map(async (unit) => {
  //               const aux = await questionResolver
  //                 .getRandomQuestions(asignatureId, unit.id_unit)
  //                 .flat();
  //               return aux;
  //             })
  //             .flat()
  //             .sort(() => Math.random() - 0.5)
  //             .slice(0, 10)
  //         );

  //         userprogress.questions = questions.map((question) => {
  //           const userQuestion = new UserQuestion();
  //           userQuestion._id = new ObjectId();
  //           // userQuestion.id_question = question._id.toString();
  //           userQuestion.nota = 0;
  //           userQuestion.isDone = false;
  //           return userQuestion;
  //         });
  //         await AppDataSource.manager.update(User, user._id, user);
  //         return questions;
  //       }
  //       return [];
  //     }
  //     // return userprogress.questions;
  //   }
  //   return [];
  // }
}
