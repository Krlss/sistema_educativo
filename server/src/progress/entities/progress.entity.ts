import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Progress {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
