import "reflect-metadata"
import {Entity, Column, PrimaryColumn} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { UserAsignature } from "./UserAsignature";


@ObjectType()
@Entity()
export class UserProgress {
   
    @PrimaryColumn()
    _id!: number
    
    @Column(type => UserAsignature)
    asignature!: UserAsignature[];

}