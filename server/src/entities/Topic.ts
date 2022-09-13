import { Field, ObjectType } from 'type-graphql';
import { Column, PrimaryGeneratedColumn} from 'typeorm';
import {Question} from './Question';

@ObjectType()
export class Topic{

    @Field()
    @PrimaryGeneratedColumn()
    _id!: number;

    @Field()
    @Column('string')
    name!: string;

    @Field(()=>[Question])
    @Column('array')
    question!: Array<Question>;

}