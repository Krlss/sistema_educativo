import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CoursePeriod } from "../coursePeriod/coursePeriod.entity";
import { Asignature } from "../asignatures/asignature.entity";
import { CoursePeriodAsignatureUnit } from "../coursePeriodAsignatureUnit/coursePeriodAsignatureUnit.entity";
import { Progress } from "../progress/progress.entity";

@Entity()
@ObjectType()
export class CoursePeriodAsignature extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => Asignature, { nullable: true })
  @ManyToOne(
    () => Asignature,
    (asignature) => asignature.courseperiod_asignatures
  )
  asignature!: Asignature;

  @Field()
  @ManyToOne(
    () => CoursePeriod,
    (coursePeriod) => coursePeriod.courseperiod_asignatures
  )
  courseperiod!: CoursePeriod;

  @Field(() => [CoursePeriodAsignatureUnit], { nullable: true })
  @OneToMany(
    () => CoursePeriodAsignatureUnit,
    (coursePeriodAsignatureUnit) =>
      coursePeriodAsignatureUnit.coursePeriodAsignature
  )
  courseperiodasignatureunit!: CoursePeriodAsignatureUnit[];

  @Field(() => [Progress], { nullable: true })
  @OneToMany(() => Progress, (progress) => progress.coursePeriodAsignature)
  progress!: Progress[];
}
