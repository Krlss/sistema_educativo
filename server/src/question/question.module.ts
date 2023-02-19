import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionResolver } from './question.resolver';
import { QuestionController } from './question.controller';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [
    QuestionResolver,
    QuestionService,
    QuestionController,
    UserService,
  ],
  controllers: [QuestionController],
})
export class QuestionModule {}
