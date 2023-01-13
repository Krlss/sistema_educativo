import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Asignature } from "./Asignature";
import { Course } from "./Course";
import { User } from "./User";
import { Progress } from "./Progress";

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

  @ManyToOne(() => User, (user) => user.userCourseAsignatures)
  user!: User;

  @OneToMany(() => Progress, (progress) => progress.courseAsignature)
  progress!: Progress[];

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;
}
