import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CustomUnitInscribed } from './customAsignatureInscribed';

@ObjectType()
export class CustomTopicsIncribed {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  image: string;

  @Field(() => CustomUnitInscribed, { nullable: true })
  unit: CustomUnitInscribed;
}
