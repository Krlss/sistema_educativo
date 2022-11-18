import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { In } from "typeorm";
import { AppDataSource } from "../../config/typeorm";
const { ObjectId } = require("mongodb");
import { UserQuestion, User, Question, Asignature } from "../../entities";
import { QuestionResolver } from "../Asignature/";

@Resolver()
export class UserQuestionResolver {
  /* Agregar un tema en la unidad de la asignatura en el progreso del usuario */
  @Mutation(() => String)
  async createUserQuestion(
    @Arg("userId") userId: string,
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("topicId") topicId: string,
    @Arg("questionId") questionId: string
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

    const question = new UserQuestion();
    question._id = new ObjectId();
    question.nota = 0;
    question.id_question = questionId;
    question.isDone = false;

    topic.questions.push(question);
    await AppDataSource.manager.update(User, user._id, user);
    return topic._id.toString();
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
  @Query(() => UserQuestion)
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

    const unit = progress.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return false;
    }
    const topic = unit.topic.find((topic) => topic._id.toString() === topicId);
    if (!topic) {
      return false;
    }
    topic.nota = nota;
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

  @Mutation(() => [Question])
  async asignRandomUnitQuestions(
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("userId") userId: string
  ) {
    const user = await AppDataSource.manager.findOneBy(User, {
      _id: new ObjectId(userId),
    });

    if (!user) {
      return [];
    }

    if (user.progress) {
      const userprogress = user.progress.find(
        (progress) => progress.id_asignature.toString() === asignatureId
      );
      if (userprogress) {
        const userunit = userprogress.unit.find(
          (unit) => unit.id_unit.toString() === unitId
        );
        if (userunit) {
          if (!userunit.questions) {
            const questionResolver = new QuestionResolver();
            const questions = await questionResolver.getRandomQuestions(
              asignatureId,
              unitId
            );
            if (questions.length > 0) {
              userunit.questions = questions.map((question) => {
                const userQuestion = new UserQuestion();
                userQuestion._id = new ObjectId();
                userQuestion.id_question = question._id.toString();
                userQuestion.nota = 0;
                userQuestion.isDone = false;
                return userQuestion;
              });
              await AppDataSource.manager.update(User, user._id, user);
              return questions;
            }
            return [];
          }
          return userunit.questions;
        }
      }
    }
    return [];
  }
}
