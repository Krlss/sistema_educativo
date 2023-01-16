import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CourseAsignature } from "../courseasignatures/courseasignature.entity";

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

  @OneToMany(
    () => CourseAsignature,
    (courseasignature) => courseasignature.course
  )
  courseAsignatures!: CourseAsignature[];
}
