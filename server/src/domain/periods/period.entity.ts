import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SharedProp } from "../../infraestructure/helpers/sharedProp.helper";
import { CoursePeriod } from "../coursePeriod/coursePeriod.entity";
import { Course } from "../courses/course.entity";

@Entity()
@ObjectType()
export class Period extends SharedProp {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Generated("uuid")
  @Column()
  _id!: string;

  @Field()
  @Column()
  name!: string;

  @Field(() => Course, { nullable: true })
  @OneToMany(() => CoursePeriod, (courseperiod) => courseperiod.course, {
    cascade: true,
  })
  courses!: Course[];
}
