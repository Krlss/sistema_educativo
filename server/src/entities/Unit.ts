import { Field, ObjectType } from 'type-graphql';
import { Column, PrimaryGeneratedColumn} from 'typeorm';
import {Topic} from './Topic';

@ObjectType()
export class Unit{
    @Field()
    @PrimaryGeneratedColumn()
    _id!: number;

    @Field()
    @Column('string')
    name!: string;

    @Field(()=>[Topic])
    @Column('array')
    topic!: Array<Topic>;

}