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
import { Topic } from "./Topic";
import { Asignature } from "./Asignature";

@Entity()
export class Unit extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToMany(() => Asignature, (asignature) => asignature.units)
  @JoinTable()
  asignatures!: Asignature[];

  @OneToMany(() => Topic, (topic) => topic.units)
  @JoinTable()
  topics!: Topic[];

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;
}
