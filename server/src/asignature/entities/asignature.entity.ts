import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { PeriodsCourses } from 'src/courses-periods/entities/courses-period.entity';

@ObjectType()
export class Asignature {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt: Date;

  @Field(() => [PeriodsCourses], { nullable: true })
  periodsCourses: PeriodsCourses[];
}
