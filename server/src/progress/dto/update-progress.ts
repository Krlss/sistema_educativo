import { CreateProgressDTO } from './create-progress';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProgressDTO extends PartialType(CreateProgressDTO) {
  @Field(() => String, { nullable: true })
  userId: string;

  @Field(() => String, { nullable: true })
  asignatureId: string;

  @Field(() => String, { nullable: true })
  unitId?: string;

  @Field(() => String, { nullable: true })
  questions: string;

  @Field(() => Number, { nullable: true })
  nota: number;
}
