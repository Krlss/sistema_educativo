import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CoursesPeriods } from 'src/courses-periods/entities/courses-period.entity';

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

  @Field(() => [CoursesPeriods], { nullable: true })
  coursesPeriods: CoursesPeriods[];
}
