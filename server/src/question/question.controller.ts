import { Controller } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDTO } from './dto/create-question';
import { UpdateQuestionDTO } from './dto/update-question';
import { UserService } from 'src/user/user.service';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly userService: UserService,
  ) {}
  async getMany() {
    return this.questionService.getMany();
  }

  async get(id: string) {
    return this.questionService.get(id);
  }

  async getManyByUnit(unitId: string, asignatureId: string, userId: string) {
    const userPeriod = await this.userService.getUserLastPeriod(userId);
    const questions = (
      await this.questionService.getManyByUnit(
        unitId,
        asignatureId,
        userPeriod.id,
      )
    )
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    const low_questions = questions.filter(
      (question) => question.difficulty === 'low',
    );
    const high_questions = questions.filter(
      (question) => question.difficulty === 'high',
    );
    let data = [];
    if (high_questions.length < 25) {
      data = [
        ...high_questions,
        ...low_questions.splice(0, 25 - high_questions.length),
      ]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    } else {
      data = [...high_questions.splice(0, 25), ...low_questions.splice(0, 5)];
    }

    return data;
  }

  async getManyByAsignature(asignatureId: string, userId: string) {
    const userPeriod = await this.userService.getUserLastPeriod(userId);
    const questions = (
      await this.questionService.getManyByAsignature(
        asignatureId,
        userPeriod.id,
      )
    )
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    const low_questions = questions.filter(
      (question) => question.difficulty === 'low',
    );
    const high_questions = questions.filter(
      (question) => question.difficulty === 'high',
    );
    let data = [];
    if (high_questions.length < 7) {
      data = [
        ...high_questions,
        ...low_questions.splice(0, 7 - high_questions.length),
      ]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    } else {
      data = [...high_questions.splice(0, 7), ...low_questions.splice(0, 3)];
    }

    return data;
  }

  async create(data: CreateQuestionDTO) {
    return this.questionService.create(data);
  }

  async update(data: UpdateQuestionDTO) {
    return this.questionService.update(data);
  }

  async delete(id: string) {
    return this.questionService.delete(id);
  }
}
