import {Resolver, Query, Mutation, Arg} from 'type-graphql';
import {Asignature} from '../entities/Asignature';
import {Question} from '../entities/Question';
import { AppDataSource } from '../config/typeorm';
import { ObjectID } from 'typeorm';

@Resolver()
export class QuestionResolver{

    /* Crea una nueva pregunta */
    @Mutation(()=>String)
    async createQuestion(
        @Arg("question") question: string,
        @Arg("answer") answer: Array<string>,
        @Arg("answerCorrect") answerCorrect: number,
        @Arg("asignatureId") asignatureId: string,
        @Arg("unitId") unitId: string,
        @Arg("topicId") topicId: string ){
        const asignature = await AppDataSource.manager.findOneBy(Asignature, {
            _id: new ObjectID(asignatureId)
        })
        if (!asignature){
            return false;
        }
        const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
        if (!unit){
            return false;
        }
        const topic = unit.topic.find((topic) => topic._id.toString() === topicId);
        if (!topic){
            return false;
        }
        const _question = new Question();
        _question.question = question;
        _question.answer = answer;
        _question.answerCorrect = answerCorrect;
        topic.question.push(_question);
        await AppDataSource.manager.save(asignature);
        return _question._id.toString();
    }

    /* Elimina una pregunta */
    @Mutation(()=>Boolean)
    async DeleteQuestion(
        @Arg("asignatureId") asignatureId: string,
        @Arg("unitId") unitId: string,
        @Arg("topicId") topicId: string,
        @Arg("questionId") questionId: string ){
        const asignature = await AppDataSource.manager.findOneBy(Asignature, {
            _id: new ObjectID(asignatureId)
        })
        if (!asignature){
            return false;
        }
        const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
        if (!unit){
            return false;
        }
        const topic = unit.topic.find((topic) => topic._id.toString() === topicId);
        if (!topic){
            return false;
        }
        const question = topic.question.find((question) => question._id.toString() === questionId);
        if (!question){
            return false;
        }
        topic.question = topic.question.filter((question) => question._id.toString() !== questionId);
        await AppDataSource.manager.save(asignature);
        return true;
    }
    
    /* Consulta una pregunta por medio del _id */
    @Query(()=>[Question])
    async getQuestion(
        @Arg("asignatureId") asignatureId: string,
        @Arg("unitId") unitId: string,
        @Arg("topicId") topicId: string,
        @Arg("questionId") questionId: string ){
        const asignature = await AppDataSource.manager.findOneBy(Asignature, {
            _id: new ObjectID(asignatureId)
        })
        if (!asignature){
            return false;
        }
        const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
        if (!unit){
            return false;
        }
        const topic = unit.topic.find((topic) => topic._id.toString() === topicId);
        if (!topic){
            return false;
        }
        const question = topic.question.find((question) => question._id.toString() === questionId);
        if (!question){
            return false;
        }
        return question;
    }

    /* Consulta todas las preguntas de un tema */
    @Query(()=>[Question])
    async getQuestions(
        @Arg("asignatureId") asignatureId: string,
        @Arg("unitId") unitId: string,
        @Arg("topicId") topicId: string ){
        const asignature = await AppDataSource.manager.findOneBy(Asignature, {
            _id: new ObjectID(asignatureId)
        })
        if (!asignature){
            return false;
        }
        const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
        if (!unit){
            return false;
        }
        const topic = unit.topic.find((topic) => topic._id.toString() === topicId);
        if (!topic){
            return false;
        }
        return topic.question;
    }

    /* Actualiza una pregunta */
    @Mutation(()=>Boolean)
    async updateQuestion(
        @Arg("asignatureId") asignatureId: string,
        @Arg("unitId") unitId: string,
        @Arg("topicId") topicId: string,
        @Arg('answerCorrect') answerCorrect: number,
        @Arg("questionId") questionId: string,
        @Arg("question") question: string,
        @Arg("answer") answer: Array<string> ){
        const asignature = await AppDataSource.manager.findOneBy(Asignature, {
            _id: new ObjectID(asignatureId)
        })
        if (!asignature){
            return false;
        }
        const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
        if (!unit){
            return false;
        }
        const topic = unit.topic.find((topic) => topic._id.toString() === topicId);
        if (!topic){
            return false;
        }
        const _question = topic.question.find((question) => question._id.toString() === questionId);
        if (!_question){
            return false;
        }
        _question.question = question;
        _question.answer = answer;
        _question.answerCorrect = answerCorrect;
        await AppDataSource.manager.save(asignature);
        return true;
    }
        
}