import { In } from "typeorm";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import { CoursePeriodAsignature } from "../coursePeriodAsignature/coursePeriodAsignature.entity";
import { CoursePeriodAsignatureUnit } from "./coursePeriodAsignatureUnit.entity";

export class coursePeriodAsignatureUnitService {
  async getCoursePeriodAsignatureUnitById(id: number) {
    return await AppDataSource.manager.findOne(CoursePeriodAsignatureUnit, {
      where: {
        id,
      },
      relations: { coursePeriodAsignature: true },
    });
  }

  async getCoursePeriodAsignatureUnitsByCoursePeriodAsignature(
    coursePeriodAsignature: CoursePeriodAsignature
  ): Promise<CoursePeriodAsignatureUnit[] | []> {
    return await AppDataSource.manager.find(CoursePeriodAsignatureUnit, {
      relations: { coursePeriodAsignature: true },
      where: {
        coursePeriodAsignature: { id: coursePeriodAsignature.id },
      },
    });
  }

  async getAllCoursePeriodAsignatureUnits(): Promise<
    CoursePeriodAsignatureUnit[] | []
  > {
    return await AppDataSource.manager.find(CoursePeriodAsignatureUnit, {
      relations: { coursePeriodAsignature: true },
    });
  }

  async createCoursePeriodAsignatureUnit(
    coursePeriodAsignatureUnit: CoursePeriodAsignatureUnit
  ) {
    await AppDataSource.manager.save(coursePeriodAsignatureUnit);
    return true;
  }

  async updateCoursePeriodAsignatureUnit(
    coursePeriodAsignatureUnit: CoursePeriodAsignatureUnit
  ) {
    await AppDataSource.manager.save(coursePeriodAsignatureUnit);
    return true;
  }

  async deleteCoursePeriodAsignatureUnit(id: number) {
    await AppDataSource.manager.delete(CoursePeriodAsignatureUnit, id);
    return true;
  }

  async getCoursePeriodAsignatureUnitsByArrayId(
    ids: number[]
  ): Promise<CoursePeriodAsignatureUnit[] | []> {
    return await AppDataSource.manager.find(CoursePeriodAsignatureUnit, {
      where: {
        id: In(ids),
      },
      relations: { coursePeriodAsignature: true },
    });
  }
}
