import "reflect-metadata"
import "reflect-metadata"
import {Entity, Column, ObjectID, ObjectIdColumn, BaseEntity} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { UserProgress } from "./UserProgress";


@ObjectType()
@Entity()
export class User {

    @Field(()=>String)
    @ObjectIdColumn()
    _id!: ObjectID;

    @Field()
    @Column('string')
    name!: string;

    @Field()
    @Column('string')
    lastname!: string;


    @Field()
    @Column('string')
    mail!: string;

    @Field()
    @Column('string')
    username!: string;


    @Field()
    @Column('string')
    password!: string;


    @Field(()=> [String])
    @Column('array')
    rol!: Array<string>;

    @Column(type => UserProgress)
    progress!: UserProgress[];

}