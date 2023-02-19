import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class CustomProgress {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => Float, { nullable: true })
  nota: number;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  image: string;

  @Field(() => Number, { nullable: true })
  percentage: number;

  @Field(() => [CustomUnit], { nullable: true })
  unit: CustomUnit[];
}

@ObjectType()
export class CustomTopic {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => ID, { nullable: true })
  id_asignature: string;

  @Field(() => ID, { nullable: true })
  id_unit: string;

  @Field(() => Boolean, { nullable: true })
  finished: boolean;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  image: string;

  @Field(() => String, { nullable: true })
  video: string;
}

@ObjectType()
export class CustomUnit {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field(() => ID, { nullable: true })
  id_asignature: string;

  @Field(() => Float, { nullable: true })
  nota: number;

  @Field(() => Boolean, { nullable: true })
  finished: boolean;

  @Field(() => [CustomTopic], { nullable: true })
  topic: CustomTopic[];
}
