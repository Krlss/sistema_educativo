import { Controller } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDTO } from './dto/create-question';
import { UpdateQuestionDTO } from './dto/update-question';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  async getMany() {
    return this.questionService.getMany();
  }

  async get(id: string) {
    return this.questionService.get(id);
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
