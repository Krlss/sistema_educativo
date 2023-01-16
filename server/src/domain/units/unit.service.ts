import { Unit } from "./unit.entity";
import { AppDataSource } from "../../infraestructure/config/typeorm";

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
  async create(unit: Unit) {
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
}
