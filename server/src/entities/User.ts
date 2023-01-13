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
import { Rol } from "./Rol";
import { Asignature } from "./Asignature";
import { CourseAsignature } from "./CourseAsignature";
import { Progress } from "./Progress";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @ManyToMany(() => Rol, { nullable: true })
  @JoinTable()
  userRols?: Rol[];

  @OneToMany(
    () => CourseAsignature,
    (courseasignature) => courseasignature.user
  )
  @JoinTable()
  userCourseAsignatures!: CourseAsignature[];

  @OneToMany(() => Progress, (progress) => progress.user)
  @JoinTable()
  progress!: Progress[];

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;
}
