import { In } from "typeorm";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import { CoursePeriod } from "./course_period.entity";

export class coursePeriodService {
  async getCoursePeriodById(id: number) {
    return await AppDataSource.manager.findOne(CoursePeriod, {
      where: {
        id,
      },
    });
  }

  async getAllCoursePeriods(): Promise<CoursePeriod[] | []> {
    return await AppDataSource.manager.find(CoursePeriod);
  }

  async createCoursePeriod(coursePeriod: CoursePeriod) {
    await AppDataSource.manager.save(coursePeriod);
    return true;
  }

  async updateCoursePeriod(coursePeriod: CoursePeriod) {
    await AppDataSource.manager.save(coursePeriod);
    return true;
  }

  async deleteCoursePeriod(id: number) {
    await AppDataSource.manager.delete(CoursePeriod, id);
    return true;
  }

  async getCoursePeriodsByArrayId(ids: number[]): Promise<CoursePeriod[] | []> {
    return await AppDataSource.manager.find(CoursePeriod, {
      where: {
        id: In(ids),
      },
    });
  }
}
