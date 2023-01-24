import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Rol } from "../roles/rol.entity";
import { Progress } from "../userquestions/userquestion.entity";
import { CoursePeriodAsignature } from "../coursePeriod_asignature/coursePeriod_asignature.entity";
import { UserAsignature } from "../userasignatures/userasignature.entity";
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

  @Field(() => [Progress], { nullable: true })
  @OneToMany(() => Progress, (progress) => progress.users)
  progress!: Progress[];

  @Field(() => [UserAsignature], { nullable: true })
  @OneToMany(() => UserAsignature, (userasignature) => userasignature.user)
  userasignature!: UserAsignature[];

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;

  @Field({ nullable: true })
  @Column({ default: () => "NOW()" })
  updatedAt?: Date;
}
