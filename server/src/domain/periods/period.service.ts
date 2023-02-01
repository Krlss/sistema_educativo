import { In } from "typeorm";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import { Period } from "./period.entity";

export class periodService {
  async getPeriodById(id: number) {
    return await AppDataSource.manager.findOne(Period, {
      where: {
        id,
      },
    });
  }

  async getPeriodsByName(name: string): Promise<Period[] | []> {
    return await AppDataSource.manager.find(Period, {
      where: {
        name,
      },
    });
  }

  async getAllPeriods(): Promise<Period[] | []> {
    return await AppDataSource.manager.find(Period, {
      relations: {
        courses: true,
      },
    });
  }

  async createPeriod(period: Period) {
    await AppDataSource.manager.save(period);
    return true;
  }

  async updatePeriod(period: Period) {
    await AppDataSource.manager.save(period);
    return true;
  }

  async deletePeriod(id: number) {
    await AppDataSource.manager.delete(Period, id);
    return true;
  }

  async getPeriodsByArrayId(ids: number[]): Promise<Period[] | []> {
    return await AppDataSource.manager.find(Period, {
      where: {
        id: In(ids),
      },
    });
  }
}
