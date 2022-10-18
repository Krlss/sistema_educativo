import { Field, ObjectType } from 'type-graphql';
import { Column, PrimaryColumn} from 'typeorm';
import {Topic} from './Topic';

@ObjectType()
export class Unit{
  
    @PrimaryColumn()
    _id!: number

    @Field()
    @Column('string')
    name!: string;

    @Column(type => Topic)
    topic!: Topic[];

}