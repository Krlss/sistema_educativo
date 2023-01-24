import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CoursePeriodAsignature } from "../coursePeriod_asignature/coursePeriod_asignature.entity";
import { User } from "../users/user.entity";

@Entity()
@ObjectType()
export class UserAsignature extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  grade!: number;

  @Field(() => CoursePeriodAsignature)
  @ManyToOne(
    () => CoursePeriodAsignature,
    (coursePeriodAsignature) => coursePeriodAsignature.userasignature
  )
  courseperiodasignature!: CoursePeriodAsignature;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.userasignature)
  user!: User;
}
