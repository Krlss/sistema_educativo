import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CoursePeriodsAsignaturesUnitsTopic {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => Int, { nullable: true })
  periodCoursesAsignaturesUnitsId: number;
}
