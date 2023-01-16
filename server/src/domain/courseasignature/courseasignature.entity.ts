import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Asignature } from "../asignatures/Asignature";
import { Course } from "../courses/course.entity";
import { User } from "../users/user.entity";
import { Progress } from "../../infraestructure/entities/Progress";

@Entity()
@ObjectType()
export class CourseAsignature extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Course, (course) => course.courseAsignatures)
  course!: Course;

  @ManyToOne(() => Asignature, (asignature) => asignature.courseAsignatures)
  asignature!: Asignature;

  /* @ManyToOne(() => User, (user) => user.userCourseAsignatures)
  user!: User; */

  @OneToMany(() => Progress, (progress) => progress.courseAsignature)
  progress!: Progress[];

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;
}
