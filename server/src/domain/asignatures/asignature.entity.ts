import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
  OneToMany,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Unit } from "../units/unit.entity";
import { Topic } from "../topics/topic.entity";
import { CoursePeriodAsignature } from "../coursePeriodAsignature/coursePeriodAsignature.entity";

@Entity()
@ObjectType()
export class Asignature extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column({ type: "text" })
  description!: string;

  @Field()
  @Column()
  image!: string;

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;

  @Field()
  @Column({ default: () => "NOW()" })
  updatedAt?: Date;

  @Field(() => [CoursePeriodAsignature], { nullable: true })
  @OneToMany(
    () => CoursePeriodAsignature,
    (courseperiodasignature) => courseperiodasignature.asignature
  )
  courseperiod_asignatures!: CoursePeriodAsignature[];
}
