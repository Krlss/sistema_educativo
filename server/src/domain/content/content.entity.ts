// import { Field, ObjectType } from "type-graphql";
// import {
//   BaseEntity,
//   Entity,
//   ManyToOne,
//   OneToMany,
//   PrimaryGeneratedColumn,
// } from "typeorm";
// import { CoursePeriodAsignature } from "../coursePeriod_asignature/coursePeriod_asignature.entity";
// import { Unit } from "../units/unit.entity";
// import { Topic } from "../topics/topic.entity";
// import { Question } from "../questions/question.entity";
// import { Progress } from "../progress/progress.entity";

// @Entity()
// @ObjectType()
// export class Content extends BaseEntity {
//   @Field()
//   @PrimaryGeneratedColumn()
//   id!: number;

//   /* @Field(() => CoursePeriodAsignature, { nullable: true })
//   @ManyToOne(
//     () => CoursePeriodAsignature,
//     (courseperiod_asignature) =>
//       courseperiod_asignature.contents_courseperiodasignature
//   )
//   courseperiod_asignature!: CoursePeriodAsignature; */

//   /* @Field(() => Unit, { nullable: true })
//   @ManyToOne(() => Unit, (unit) => unit.content_unit)
//   unit!: Unit; */

//   /* @Field(() => Topic, { nullable: true })
//   @ManyToOne(() => Topic, (topic) => topic.content_topic)
//   topic!: Topic; */
//   /*
//   @Field(() => Question, { nullable: true })
//   @ManyToOne(() => Question, (question) => question.content_question)
//   question!: Question; */

//   /* @Field(() => Progress, { nullable: true })
//   @OneToMany(() => Progress, (progress) => progress.contents)
//   progress!: Unit; */
// }
