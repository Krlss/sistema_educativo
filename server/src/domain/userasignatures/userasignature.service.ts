/* import { AppDataSource } from "../../infraestructure/config/typeorm";
import { In } from "typeorm";

export class contentService {
  async findById(id: number) {
    return await AppDataSource.manager.findOne(Content, {
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<Content[] | []> {
    return await AppDataSource.manager.find(Content);
  }

  async create(content: Content) {
    await AppDataSource.manager.save(content);
    return true;
  }

  async update(content: Content) {
    await AppDataSource.manager.save(content);
    return true;
  }

  async delete(id: number) {
    await AppDataSource.manager.delete(Content, { id });
    return true;
  }

  async findAllByArray(ids: number[]): Promise<Content[] | []> {
    return await AppDataSource.manager.find(Content, {
      where: {
        id: In(ids),
      },
    });
  }
}
 */
