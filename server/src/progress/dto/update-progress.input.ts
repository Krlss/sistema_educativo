import { CreateProgressInput } from './create-progress.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProgressInput extends PartialType(CreateProgressInput) {
  @Field(() => Int)
  id: number;
}
