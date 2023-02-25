import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
class User {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  username: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  lastname: string;
}

@ObjectType()
export class List {
  @Field(() => String, { nullable: true })
  period: string;

  @Field(() => String, { nullable: true })
  course: string;

  @Field(() => [User], { nullable: true })
  users: User[];
}
