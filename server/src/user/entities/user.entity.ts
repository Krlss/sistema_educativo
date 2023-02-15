import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Progress } from 'src/progress/entities/progress.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { Topic } from 'src/topic/entities/topic.entity';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  password: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  lastName: string;

  @Field(() => String, { nullable: true })
  createdAt: Date;

  @Field(() => String, { nullable: true })
  updatedAt: Date;

  @Field(() => [Topic], { nullable: true })
  topics: Topic[];

  @Field(() => [Rol], { nullable: true })
  roles: Rol[];

  @Field(() => [Progress], { nullable: true })
  progress: Progress[];
}
