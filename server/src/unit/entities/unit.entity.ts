import { ObjectType, Field, ID } from '@nestjs/graphql';
import { PeriodsCoursesAsignaturesUnit } from 'src/courses-periods-asignatures-units/entities/courses-periods-asignatures-unit.entity';

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

  @Field(() => [PeriodsCoursesAsignaturesUnit], { nullable: true })
  periodsCoursesAsignaturesUnits: PeriodsCoursesAsignaturesUnit[];
}
