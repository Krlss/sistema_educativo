import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

import { CoursePeriod } from "../course_period/course_period.entity";

@Entity()
@ObjectType()
export class Course extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;

  @Field()
  @Column({ default: () => "NOW()" })
  updatedAt?: Date;

  /* @Field(() => [CourseAsignature], { nullable: true })
  @OneToMany(
    () => CourseAsignature,
    (course_asignature) => course_asignature.courses
  )
  course_asignature!: CourseAsignature[]; */

  @Field(() => [CoursePeriod], { nullable: true })
  @OneToMany(() => CoursePeriod, (courseperiod) => courseperiod.periods)
  course_periods!: CoursePeriod[];
}
