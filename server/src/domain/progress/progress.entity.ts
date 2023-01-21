import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Content } from "../content/content.entity";
import { User } from "../users/user.entity";

@Entity()
@ObjectType()
export class Progress extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.progress)
  user!: User;

  @Field(() => Content, { nullable: true })
  @ManyToOne(() => Content, (content) => content.progress)
  contents!: Content;
}
