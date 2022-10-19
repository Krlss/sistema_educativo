import "reflect-metadata"
import {Entity, Column, PrimaryColumn} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { UserAsignature } from "./UserAsignature";


@ObjectType()
export class UserProgress {
   
    @PrimaryColumn()
    _id!: number
    
    @Field()
    @Column('string')
    name!: string;

    @Column(type => UserAsignature)
    asignature!: UserAsignature[];

}