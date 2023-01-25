import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Unit } from "../units/unit.entity";
import { Question } from "../questions/question.entity";
import { CoursePeriodAsignatureUnitTopic } from "../coursePeriodAsignatureUnitTopic/coursePeriodAsignatureUnitTopic.entity";

@Entity()
@ObjectType()
export class Topic extends BaseEntity {
  @Field({ description: "Identificador del tema" })
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({ description: "Nombre del tema" })
  @Column()
  name!: string;

  @Field({ description: "Clase del tema" })
  @Column()
  image!: string;

  @Field({ description: "Video del tema" })
  @Column()
  video!: string;

  @Field(() => Unit, { description: "Unidad al que pertenece el tema" })
  @ManyToOne(() => Unit, (unit) => unit.topics)
  unit?: Unit;

  @Field(() => [CoursePeriodAsignatureUnitTopic], { nullable: true })
  @OneToMany(
    () => CoursePeriodAsignatureUnitTopic,
    (coursePeriodAsignatureUnitTopic) => coursePeriodAsignatureUnitTopic.topic
  )
  courseperiodasignatureunittopic!: CoursePeriodAsignatureUnitTopic[];

  @Field(() => [Question], { nullable: true })
  @OneToMany(() => Question, (question) => question.topic)
  questions!: Question[];

  @Field({ description: "Fecha de creación del tema" })
  @Column({ default: () => "NOW()" })
  createdAt!: Date;

  @Field({ description: "Fecha de actualización del tema" })
  @Column({ default: () => "NOW()" })
  updatedAt!: Date;
}
