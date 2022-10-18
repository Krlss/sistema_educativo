import "reflect-metadata"
import {Entity, Column, PrimaryColumn} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { UserUnit } from "./UserUnit";

@ObjectType()
@Entity()
export class UserAsignature {
   
    @PrimaryColumn()
    _id!: number

    @Field()
    @Column('int')
    nota!: number;
    
    @Column(type => UserUnit)
    unit!: UserUnit[];

    @Field()
    @Column('int')
    id_asignature!: number;

}