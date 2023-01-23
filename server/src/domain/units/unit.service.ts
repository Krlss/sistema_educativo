import { Unit } from "./unit.entity";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import { In } from "typeorm";
import { UnitSaveProps } from "../../infraestructure/types/units";

export class unitService {
  async findById(id: number) {
    return await AppDataSource.manager.findOne(Unit, {
      where: {
        id,
      },
    });
  }
  async findAll(): Promise<Unit[] | []> {
    return await AppDataSource.manager.find(Unit);
  }
  async create(unit: UnitSaveProps) {
    await AppDataSource.manager.save(unit);
    return true;
  }
  async update(unit: Unit) {
    await AppDataSource.manager.save(unit);
    return true;
  }
  async delete(id: number) {
    await AppDataSource.manager.delete(Unit, { id });
    return true;
  }

  async getUnitsByArrayId(ids: number[]): Promise<Unit[] | []> {
    return await AppDataSource.manager.find(Unit, {
      where: {
        id: In(ids),
      },
    });
  }
}
