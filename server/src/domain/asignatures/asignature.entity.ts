import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
//import { CourseAsignature } from "../courseasignatures/courseasignature.entity";
import { Unit } from "../units/unit.entity";
import { Course } from "../courses/course.entity";

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

  @Field(() => [Unit], { nullable: true })
  @ManyToMany(() => Unit, (unit) => unit.asignatures)
  @JoinTable({ name: "asignatures_units" })
  units!: Unit[];

  @Field(() => [Course], { nullable: true })
  @ManyToMany(() => Course, (course) => course.asignatures)
  @JoinTable({
    name: "courses_asignatures",
  })
  courses!: Course[];
}
