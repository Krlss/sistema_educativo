import { ObjectType, Field, ID } from '@nestjs/graphql';
import { PeriodsCourses } from 'src/courses-periods/entities/courses-period.entity';

@ObjectType()
export class Period {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field(() => [PeriodsCourses], { nullable: true })
  periodsCourses: PeriodsCourses[];
}
