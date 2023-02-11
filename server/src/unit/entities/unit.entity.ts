import { ObjectType, Field, ID } from '@nestjs/graphql';
import { PeriodsCoursesAsignaturesUnits } from 'src/courses-periods-asignatures-units/entities/courses-periods-asignatures-unit.entity';

@ObjectType()
export class Unit {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => [PeriodsCoursesAsignaturesUnits], { nullable: true })
  periodsCoursesAsignaturesUnits: PeriodsCoursesAsignaturesUnits[];
}
