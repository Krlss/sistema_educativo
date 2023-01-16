import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { User } from "../users/user.entity";

@Entity()
@ObjectType()
export class Rol extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;

  @Column({ default: () => "NOW()" })
  updatedAt?: Date;

  @Field(() => [User], { nullable: true })
  @ManyToMany(() => User, (user) => user.roles)
  @JoinTable({ name: "users_rols", joinColumn: { name: "rolId" } })
  users!: User[];
}
