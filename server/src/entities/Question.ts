import { Field, Int, ObjectType } from 'type-graphql';
import { Column, PrimaryGeneratedColumn} from 'typeorm';

@ObjectType()
export class Question{

    @Field()
    @PrimaryGeneratedColumn()
    _id!: number;

    @Field(()=>[String])
    @Column('array')
    answer!: Array<string>;

    @Field()
    @Column('string')
    question!: string;

    @Field(()=>Int)
    @Column('int')
    answerCorrect!: number;

    @Field()
    @Column('string')
    text!: string;

}