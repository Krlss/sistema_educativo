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
import { Rol } from "../roles/rol.entity";
import { Progress } from "../progress/progress.entity";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  lastName!: string;

  @Field()
  @Column()
  email!: string;

  @Field()
  @Column()
  password!: string;

  @Field(() => [Rol], { nullable: true })
  @ManyToMany(() => Rol, (rol) => rol.users)
  @JoinTable({ name: "users_roles" })
  roles!: Rol[];

  @Field(() => [Progress], { nullable: true })
  @OneToMany(() => Progress, (progress) => progress.user)
  progress!: Progress[];

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;

  @Field({ nullable: true })
  @Column({ default: () => "NOW()" })
  updatedAt?: Date;
}
