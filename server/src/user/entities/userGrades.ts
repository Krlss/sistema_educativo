import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
class UnitGrades {
  @Field(() => ID, { nullable: true })
  id: string;
  @Field(() => String, { nullable: true })
  name: string;
  @Field(() => Number, { nullable: true })
  nota: number;
  @Field(() => String, { nullable: true })
  userId: string;
}

@ObjectType()
export class Grades {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  asignature: string;

  @Field(() => String, { nullable: true })
  course: string;

  @Field(() => Number, { nullable: true })
  nota: number;

  @Field(() => String, { nullable: true })
  userId: string;

  @Field(() => String, { nullable: true })
  username: string;

  @Field(() => [UnitGrades], { nullable: true })
  units: UnitGrades[];
}
