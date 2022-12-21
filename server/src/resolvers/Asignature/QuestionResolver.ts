import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Asignature, Question, Topic, Unit } from "../../entities/";
import { AppDataSource } from "../../config/typeorm";
const { ObjectId } = require("mongodb");
@Resolver()
export class QuestionResolver {
  /* Crea una nueva pregunta */
  @Mutation(() => String)
  async createQuestion(
    @Arg("title") title: string,
    @Arg("subtitle", { nullable: true }) subtitle: string,
    @Arg("options") options: string,
    @Arg("type") type: string,
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
    const _question = new Question();
    _question._id = new ObjectId();
    _question.subtitle = subtitle;
    _question.title = title;
    _question.options = options;
    _question.type = type;
    topic.question.push(_question);
    const index = unit.topic.findIndex(
      (topic) => topic._id.toString() === topicId
    );
    unit.topic[index] = topic;
    const index2 = asignature.unit.findIndex(
      (unit) => unit._id.toString() === unitId
    );
    asignature.unit[index2] = unit;
    await AppDataSource.manager.update(Asignature, asignature._id, asignature);
    return _question._id;
  }

  /* Elimina una pregunta */
  @Mutation(() => Boolean)
  async DeleteQuestion(
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("topicId") topicId: string,
    @Arg("questionId") questionId: string
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
    const question = topic.question.find(
      (question) => question._id.toString() === questionId
    );
    if (!question) {
      return false;
    }
    topic.question = topic.question.filter(
      (question) => question._id.toString() !== questionId
    );
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

  /* Consulta una pregunta por medio del _id */
  @Query(() => Question)
  async getQuestion(
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("topicId") topicId: string,
    @Arg("questionId") questionId: string
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
    const question = topic.question.find(
      (question) => question._id.toString() === questionId
    );
    if (!question) {
      return false;
    }
    return question;
  }

  /* Consulta todas las preguntas de un tema */
  @Query(() => [Question])
  async getQuestions(
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("topicId") topicId: string
  ) {
    const asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(asignatureId),
    });
    if (!asignature) {
      return [];
    }
    const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return [];
    }
    const topic = unit.topic.find((topic) => topic._id.toString() === topicId);
    if (!topic) {
      return [];
    }

    return topic.question;
  }

  /* Actualiza una pregunta */
  @Mutation(() => Boolean)
  async updateQuestion(
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("topicId") topicId: string,
    @Arg("questionId") questionId: string,
    @Arg("title", { nullable: true }) title: string,
    @Arg("subtitle", { nullable: true }) subtitle: string,
    @Arg("type", { nullable: true }) type: string,
    @Arg("options", { nullable: true }) options: string
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
    const _question = topic.question.find(
      (question) => question._id.toString() === questionId
    );
    if (!_question) {
      return false;
    }
    if (subtitle) {
      _question.subtitle = subtitle;
    }
    if (options) {
      _question.options = options;
    }
    if (type) {
      _question.type = type;
    }
    if (title) {
      _question.title = title;
    }
    const index = topic.question.findIndex(
      (question) => question._id.toString() === questionId
    );
    topic.question[index] = _question;
    const index2 = unit.topic.findIndex(
      (topic) => topic._id.toString() === topicId
    );
    unit.topic[index2] = topic;
    const index3 = asignature.unit.findIndex(
      (unit) => unit._id.toString() === unitId
    );
    asignature.unit[index3] = unit;
    await AppDataSource.manager.update(Asignature, asignature._id, asignature);
    return true;
  }

  /* Consulta 10 preguntas de un tema */
  @Query(() => [Question])
  async getRandomUnitQuestions(
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string
  ) {
    const asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(asignatureId),
    });
    if (!asignature) {
      return [];
    }
    const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return [];
    }
    const unitquestions = unit.topic.map((topic) => topic.question).flat();

    const questions = unitquestions
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    return questions;
  }

  @Query(() => [Question])
  async getRandomAsignatureQuestions(
    @Arg("asignatureId") asignatureId: string
  ) {
    const asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(asignatureId),
    });
    if (!asignature) {
      return [];
    }
    const asignatureunit = asignature.unit
      .map((unit) => unit.topic.map((topic) => topic.question).flat())
      .flat();

    // const unitquestions = unit.topic.map((topic) => topic.question).flat();

    const questions = asignatureunit
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    return questions;
  }

  @Query(() => [Question])
  async getTypeQuestions() {
    const asignatures = await AppDataSource.manager.find(Asignature);
    const questions = asignatures
      .map((asignature: Asignature) => {
        return asignature.unit
          .map((unit: Unit) => {
            return unit.topic
              .map((topic: Topic) => {
                return topic.question.flat();
              })
              .flat();
          })
          .flat();
      })
      .flat();
    console.log(questions.length);

    return questions;
  }
}
