import { Field, Int, ObjectType } from 'type-graphql';
import { Column} from 'typeorm';

@ObjectType()
export class Question{
    @Field(()=>[String])
    @Column('array')
    answer!: Array<string>;

    @Field()
    @Column('string')
    enum!: string;

    @Field(()=>Int)
    @Column('int')
    answerCorrect!: number;

    @Field()
    @Column('string')
    text!: string;

}