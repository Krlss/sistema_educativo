import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { SharedProp } from "../../infraestructure/helpers/sharedProp.helper";

import { CoursePeriod } from "../coursePeriod/coursePeriod.entity";
import { Period } from "../periods/period.entity";

@Entity()
@ObjectType()
export class Course extends SharedProp {
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

  @Field(() => Period, { nullable: true })
  @OneToMany(() => CoursePeriod, (courseperiod) => courseperiod.period, {
    cascade: true,
  })
  periods!: Period[];
}
