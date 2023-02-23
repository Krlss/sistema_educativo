import { registerEnumType } from '@nestjs/graphql';
import { QuestionType } from 'src/core/prisma/seeds/data/questions';

registerEnumType(QuestionType, {
  name: 'QuestionType',
});

export default QuestionType;
