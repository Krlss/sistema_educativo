import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Topic } from "../topics/topic.entity";
import { CoursePeriodAsignatureUnit } from "../coursePeriodAsignatureUnit/coursePeriodAsignatureUnit.entity";

@Entity()
@ObjectType()
export class CoursePeriodAsignatureUnitTopic extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => CoursePeriodAsignatureUnit, { nullable: true })
  @ManyToOne(
    () => CoursePeriodAsignatureUnit,
    (coursePeriodAsignatureUnit) =>
      coursePeriodAsignatureUnit.courseperiodasignatureunittopic
  )
  coursePeriodAsignatureUnit!: CoursePeriodAsignatureUnit;

  @Field(() => Topic, { nullable: true })
  @ManyToOne(() => Topic, (topic) => topic.courseperiodasignatureunittopic)
  topic!: Topic;
}
