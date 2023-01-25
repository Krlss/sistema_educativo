import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CoursePeriodAsignature } from "../coursePeriodAsignature/coursePeriodAsignature.entity";
import { Unit } from "../units/unit.entity";
import { CoursePeriodAsignatureUnitTopic } from "../coursePeriodAsignatureUnitTopic/coursePeriodAsignatureUnitTopic.entity";
import { Progress } from "../progress/progress.entity";

@Entity()
@ObjectType()
export class CoursePeriodAsignatureUnit extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => CoursePeriodAsignature, { nullable: true })
  @ManyToOne(
    () => CoursePeriodAsignature,
    (coursePeriodAsignature) =>
      coursePeriodAsignature.courseperiodasignatureunit
  )
  coursePeriodAsignature!: CoursePeriodAsignature;

  @Field(() => Unit, { nullable: true })
  @ManyToOne(() => Unit, (unit) => unit.courseperiodasignatureunit)
  unit!: Unit;

  @Field(() => [CoursePeriodAsignatureUnitTopic], { nullable: true })
  @OneToMany(
    () => CoursePeriodAsignatureUnitTopic,
    (coursePeriodAsignatureUnitTopic) =>
      coursePeriodAsignatureUnitTopic.coursePeriodAsignatureUnit
  )
  courseperiodasignatureunittopic!: CoursePeriodAsignatureUnitTopic[];

  @Field(() => [Progress], { nullable: true })
  @OneToMany(() => Progress, (progress) => progress.coursePeriodAsignatureUnit)
  progress!: Progress[];
}
