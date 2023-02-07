import { CreateProgressDTO } from './create-progress';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProgressDTO extends PartialType(CreateProgressDTO) {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  questions: string;
}
