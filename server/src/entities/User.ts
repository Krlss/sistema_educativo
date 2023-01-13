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

  @Field()
  @Column({ nullable: true })
  updatedAt?: Date;

  @Field()
  @Column({ nullable: true })
  deletedAt?: Date;
}
