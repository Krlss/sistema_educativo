import { Field, ObjectType } from "type-graphql";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/user.entity";
import { CoursePeriodAsignature } from "../coursePeriodAsignature/coursePeriodAsignature.entity";
import { CoursePeriodAsignatureUnit } from "../coursePeriodAsignatureUnit/coursePeriodAsignatureUnit.entity";

@Entity()
@ObjectType()
export class Progress {
  @Field()
  @PrimaryGeneratedColumn()
  id!: string;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.progress)
  user!: User;

  @Field(() => CoursePeriodAsignature, { nullable: true })
  @ManyToOne(
    () => CoursePeriodAsignature,
    (coursePeriodAsignature) => coursePeriodAsignature.progress
  )
  coursePeriodAsignature!: CoursePeriodAsignature;

  @Field(() => CoursePeriodAsignatureUnit, { nullable: true })
  @ManyToOne(
    () => CoursePeriodAsignatureUnit,
    (coursePeriodAsignatureUnit) => coursePeriodAsignatureUnit.progress
  )
  coursePeriodAsignatureUnit!: CoursePeriodAsignatureUnit;
}
