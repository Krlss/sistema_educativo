import { In } from "typeorm";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import { CoursePeriodAsignature } from "./coursePeriod_asignature.entity";
import { CoursePeriod } from "../course_period/course_period.entity";

export class coursePeriodAsignatureService {
  async getCoursePeriodAsignatureById(id: number) {
    return await AppDataSource.manager.findOne(CoursePeriodAsignature, {
      where: {
        id,
      },
      relations: {
        asignature: true,
        courseperiod: { courses: true, periods: true },
      },
    });
  }

  async getAsignaturesByCoursePeriods(courseperiodids: number[]) {
    return await AppDataSource.manager.find(CoursePeriodAsignature, {
      where: {
        courseperiod: { id: In(courseperiodids) },
      },
      relations: {
        asignature: true,
        courseperiod: { courses: true, periods: true },
      },
    });
  }

  async getAllCoursePeriodAsignatures(): Promise<
    CoursePeriodAsignature[] | []
  > {
    return await AppDataSource.manager.find(CoursePeriodAsignature, {
      relations: { asignature: true, courseperiod: true },
    });
  }

  async createCoursePeriodAsignature(
    coursePeriodAsignature: CoursePeriodAsignature
  ) {
    await AppDataSource.manager.save(coursePeriodAsignature);
    return true;
  }

  async updateCoursePeriodAsignature(
    coursePeriodAsignature: CoursePeriodAsignature
  ) {
    await AppDataSource.manager.save(coursePeriodAsignature);
    return true;
  }

  async deleteCoursePeriodAsignature(id: number) {
    await AppDataSource.manager.delete(CoursePeriodAsignature, id);
    return true;
  }

  async getCoursePeriodAsignaturesByArrayId(
    ids: number[]
  ): Promise<CoursePeriodAsignature[] | []> {
    return await AppDataSource.manager.find(CoursePeriodAsignature, {
      where: {
        id: In(ids),
      },
    });
  }
}
