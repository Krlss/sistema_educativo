import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Rol } from "../roles/rol.entity";
/* import { Asignature } from "./Asignature";
import { CourseAsignature } from "./CourseAsignature";
import { Progress } from "./Progress"; */

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

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;

  @Field({ nullable: true })
  @Column({ default: () => "NOW()" })
  updatedAt?: Date;
}
