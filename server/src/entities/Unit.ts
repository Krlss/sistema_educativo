import { Field, ObjectType } from 'type-graphql';
import { Column} from 'typeorm';
import {Topic} from './Topic';

@ObjectType()
export class Unit{
    @Field()
    @Column('string')
    name!: string;

    @Field(()=>[Topic])
    @Column('array')
    topic!: Array<Topic>;

}