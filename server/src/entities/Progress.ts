import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CourseAsignature } from "./CourseAsignature";
import { User } from "./User";

@Entity()
@ObjectType()
export class Progress {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  quantity!: number;

  @Field()
  @Column({ default: () => "NOW()" })
  createdAt?: Date;

  @ManyToOne(
    () => CourseAsignature,
    (courseasignature) => courseasignature.progress
  )
  courseAsignature!: CourseAsignature;

  @ManyToOne(() => User, (user) => user.progress)
  user!: User;
}