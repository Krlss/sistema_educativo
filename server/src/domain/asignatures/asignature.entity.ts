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
import { CourseAsignature } from "../courseasignatures/courseasignature.entity";
import { Unit } from "../units/unit.entity";

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
  @Column()
  description!: string;

  @Field()
  @Column()
  image!: string;

  /*  @OneToMany(
    () => CourseAsignature,
    (courseasignature) => courseasignature.asignature
  )
  courseAsignatures!: CourseAsignature[]; */

  @Field(() => [Unit], { nullable: true })
  @ManyToMany(() => Unit, (unit) => unit.asignatures)
  @JoinTable({ name: "asignature_units_unit" })
  units!: Unit[];

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;

  @Field()
  @Column({ default: () => "NOW()" })
  updatedAt?: Date;
}
