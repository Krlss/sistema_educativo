import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { PeriodsCoursesAsignatures } from 'src/courses-periods-asignatures/entities/courses-periods-asignature.entity';

@ObjectType()
export class Asignature {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  image: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt: Date;

  @Field(() => [PeriodsCoursesAsignatures], { nullable: true })
  periodsCoursesAsignatures: PeriodsCoursesAsignatures[];
}
