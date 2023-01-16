import { Asignature } from "./asignature.entity";
import { AppDataSource } from "../../infraestructure/config/typeorm";

export class asignatureService {
  async findById(id: number) {
    return await AppDataSource.manager.findOne(Asignature, {
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<Asignature[] | []> {
    return await AppDataSource.manager.find(Asignature);
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
}
