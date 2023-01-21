import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CoursePeriod } from "../course_period/course_period.entity";
import { Asignature } from "../asignatures/asignature.entity";
import { Content } from "../content/content.entity";

@Entity()
@ObjectType()
export class CoursePeriodAsignature extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => CoursePeriod, { nullable: true })
  @ManyToOne(
    () => CoursePeriod,
    (courseperiod) => courseperiod.courseperiod_asignatures
  )
  courseperiod!: CoursePeriod;

  @Field(() => Asignature, { nullable: true })
  @ManyToOne(
    () => Asignature,
    (asignature) => asignature.courseperiod_asignatures
  )
  asignature!: Asignature;

  @Field(() => [Content], { nullable: true })
  @OneToMany(() => Content, (content) => content.courseperiod_asignature)
  contents_courseperiodasignature!: Content[];
}
