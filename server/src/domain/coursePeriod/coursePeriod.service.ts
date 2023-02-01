import { In } from "typeorm";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import { CoursePeriod } from "./coursePeriod.entity";
import { Course } from "../courses/course.entity";
import { Period } from "../periods/period.entity";

export class coursePeriodService {
  async getCoursePeriodById(id: number) {
    return await AppDataSource.manager.findOne(CoursePeriod, {
      where: {
        id,
      },
      relations: { period: true, course: true },
    });
  }

  async getCoursePeriodsByCourseAndPeriod(
    course: Course,
    period: Period
  ): Promise<CoursePeriod[] | []> {
    return await AppDataSource.manager.find(CoursePeriod, {
      relations: { period: true, course: true },
      where: {
        course: { id: course.id },
        period: { id: period.id },
      },
    });
  }

  async getAllCoursePeriods(): Promise<CoursePeriod[] | []> {
    return await AppDataSource.manager.find(CoursePeriod, {
      relations: { period: true, course: true },
    });
  }

  async getCoursePeriodsByPeriod(period: Period): Promise<CoursePeriod[] | []> {
    return await AppDataSource.manager.find(CoursePeriod, {
      relations: { period: true, course: true },
      where: {
        period: { id: period.id },
      },
    });
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
