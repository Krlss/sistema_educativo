import { Field, Int, ObjectType} from 'type-graphql';
import { Column, PrimaryColumn} from 'typeorm';

@ObjectType()
export class Question{

    @PrimaryColumn()
    _id!: number

    @Field(() => [Object])
    answer!: Object[];

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