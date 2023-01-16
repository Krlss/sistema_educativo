import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Asignature } from "../asignatures/asignature.entity";

@Entity()
@ObjectType()
export class Course extends BaseEntity {
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

  @Field(() => [Asignature], { nullable: true })
  @ManyToMany(() => Asignature, (asignature) => asignature.courses)
  @JoinTable({ name: "courses_asignatures" })
  asignatures?: Asignature[];
}
