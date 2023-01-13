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
import { CourseAsignature } from "./CourseAsignature";
import { Unit } from "./Unit";

@Entity()
export class Asignature extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  image!: string;

  @OneToMany(
    () => CourseAsignature,
    (courseasignature) => courseasignature.asignature
  )
  courseAsignatures!: CourseAsignature[];

  @ManyToMany(() => Unit, (unit) => unit.asignatures)
  @JoinTable()
  units!: Unit[];

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;
}
