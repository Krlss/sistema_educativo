import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  ManyToMany,
  JoinTable,
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
  @JoinTable({ name: "user_user_rols_rol" })
  roles!: Rol[];

  /* @Field(() => [CourseAsignature], { nullable: true })
  @OneToMany(
    () => CourseAsignature,
    (courseasignature) => courseasignature.user
  )
  @JoinTable()
  userCourseAsignatures!: CourseAsignature[];

  @Field(() => [Progress], { nullable: true })
  @OneToMany(() => Progress, (progress) => progress.user)
  @JoinTable()
  progress!: Progress[]; */

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;

  @Field({ nullable: true })
  @Column({ default: () => "NOW()" })
  updatedAt?: Date;
}
