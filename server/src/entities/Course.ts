import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CourseAsignature } from "./CourseAsignature";

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

  @OneToMany(
    () => CourseAsignature,
    (courseasignature) => courseasignature.course
  )
  courseAsignatures!: CourseAsignature[];
}
