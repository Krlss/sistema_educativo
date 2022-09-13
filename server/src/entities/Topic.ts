import { Field, ObjectType } from 'type-graphql';
import { Column} from 'typeorm';
import {Question} from './Question';

@ObjectType()
export class Topic{

    @Field()
    @Column('string')
    name!: string;

    @Field(()=>[Question])
    @Column('array')
    question!: Array<Question>;

}