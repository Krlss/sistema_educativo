import { Question } from "./question.entity";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import { In } from "typeorm";

export class questionService {
  async findById(id: number): Promise<Question | null> {
    return await AppDataSource.manager.findOne(Question, {
      where: {
        id,
      },
    });
  }

  async findAllByArray(ids: number[]): Promise<Question[] | []> {
    return await AppDataSource.manager.find(Question, {
      where: {
        id: In(ids),
      },
    });
  }

  async findAll(): Promise<Question[] | []> {
    return await AppDataSource.manager.find(Question);
  }

  async create(question: Question) {
    await AppDataSource.manager.save(question);
    return true;
  }

  async update(question: Question) {
    await AppDataSource.manager.save(question);
    return true;
  }

  async delete(question: Question) {
    await AppDataSource.manager.remove(question);
    return true;
  }
}
