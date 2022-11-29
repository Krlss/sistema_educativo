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
    question.response = undefined;

    topic.questions.push(question);
    await AppDataSource.manager.update(User, user._id, user);
    return topic._id.toString();
  }

  /* Eliminar un tema en la unidad de la asignatura en el progreso del usuario */
  @Mutation(() => Boolean)
  async deleteUserQuestion(
    @Arg("userId") userId: string,
    @Arg("progressId") progressId: string,
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

    await AppDataSource.manager.update(User, user._id, user);
    return true;
  }

  /* Actualizar un tema en la unidad de la asignatura en el progreso del usuario */
  @Mutation(() => Boolean)
  async updateUserQuestion(
    @Arg("userId") userId: string,
    @Arg("progressId") progressId: string,
    @Arg("unitId") unitId: string,
    @Arg("topicId") topicId: string,
    @Arg("questionId") questionId: string,
    @Arg("id_question") id_question: string
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

    const question = topic.questions.find(
      (question) => question._id.toString() === questionId
    );

    if (!question) {
      return false;
    }

    question.id_question = id_question;

    await AppDataSource.manager.update(User, user._id, user);
    return true;
  }

  /* Guardar pregunta calificada */
  @Mutation(() => Boolean)
  async qualifyUserQuestion(
    @Arg("userId") userId: string,
    @Arg("progressId") progressId: string,
    @Arg("unitId") unitId: string,
    @Arg("data", { nullable: true }) data: string
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

    interface userData {
      nota: number;
      _id: string;
      isDone: boolean;
    }

    const _data: userData[] = JSON.parse(data);

    if (!_data) {
      return false;
    }

    let nota = 0;

    _data.map((item: userData) => {
      const question = unit.questions.find(
        (question) => question.id_question.toString() === item._id
      );
      if (!question) return false;
      question.nota = item.nota;
      question.isDone = item.isDone;
      nota += item.nota;
    });

    unit.nota = nota / 10;

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
