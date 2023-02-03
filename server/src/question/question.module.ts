import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionResolver } from './question.resolver';
import { QuestionController } from './question.controller';

@Module({
  providers: [QuestionResolver, QuestionService, QuestionController],
  controllers: [QuestionController],
})
export class QuestionModule {}
