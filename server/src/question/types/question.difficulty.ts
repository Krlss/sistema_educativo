import { registerEnumType } from '@nestjs/graphql';
export enum QuestionDifficulty {
  low = 'low',
  high = 'high',
}
registerEnumType(QuestionDifficulty, {
  name: 'QuestionDifficulty',
});
