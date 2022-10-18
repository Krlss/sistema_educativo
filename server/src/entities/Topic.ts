import { Field, ObjectType } from 'type-graphql';
import { Column, PrimaryColumn} from 'typeorm';
import {Question} from './Question';

@ObjectType()
export class Topic{

    @PrimaryColumn()
    _id!: number


    @Field()
    @Column('string')
    name!: string;

    @Column(type => Question)
    question!: Question[];

}