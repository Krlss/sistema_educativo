import { Asignature } from "./asignature.entity";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import { In } from "typeorm";

export class asignatureService {
  async findById(id: number) {
    return await AppDataSource.manager.findOne(Asignature, {
      where: {
        id,
      },
      relations: {
        // courses: true,
        units: true,
      },
    });
  }

  async findAll(): Promise<Asignature[] | []> {
    return await AppDataSource.manager.find(Asignature, {
      relations: {
        // courses: true,
        units: true,
      },
    });
  }

  async create(asignature: Asignature) {
    await AppDataSource.manager.save(asignature);
    return true;
  }

  async update(asignature: Asignature) {
    await AppDataSource.manager.save(asignature);
    return true;
  }

  async delete(id: number) {
    await AppDataSource.manager.delete(Asignature, { id });
    return true;
  }

  async findAllByArray(ids: number[]): Promise<Asignature[] | []> {
    return await AppDataSource.manager.find(Asignature, {
      where: {
        id: In(ids),
      },
      relations: {
        // courses: true,
        units: true,
      },
    });
  }
}
