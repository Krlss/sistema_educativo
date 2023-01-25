import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CoursePeriod } from "../coursePeriod/coursePeriod.entity";

@Entity()
@ObjectType()
export class Period extends BaseEntity {
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

  @Field(() => [CoursePeriod], { nullable: true })
  @OneToMany(() => CoursePeriod, (courseperiod) => courseperiod.periods)
  course_periods!: CoursePeriod[];
}
