import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class CustomAsignatureInscribed {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  image: string;

  @Field(() => [CustomUnitInscribed], { nullable: true })
  units: CustomUnitInscribed[];
}

@ObjectType()
export class CustomUnitInscribed {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => Boolean, { nullable: true })
  testActive: boolean;

  @Field(() => [CustomTopicsInscribed], { nullable: true })
  topics: CustomTopicsInscribed[];
}

@ObjectType()
export class CustomTopicsInscribed {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  image: string;

  @Field(() => String, { nullable: true })
  video: string;
}
