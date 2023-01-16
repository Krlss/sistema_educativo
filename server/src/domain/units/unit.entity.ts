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
//import { Topic } from "./Topic";
import { Asignature } from "../asignatures/asignature.entity";

@Entity()
@ObjectType()
export class Unit extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @ManyToMany(() => Asignature, (asignature) => asignature.units)
  @JoinTable()
  asignatures!: Asignature[];

  /*  @OneToMany(() => Topic, (topic) => topic.units)
  @JoinTable()
  topics!: Topic[]; */

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;

  @Field({ nullable: true })
  @Column({ default: () => "NOW()" })
  updatedAt?: Date;
}
