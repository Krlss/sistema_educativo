import { Topic } from "./topic.entity";
import { AppDataSource } from "../../infraestructure/config/typeorm";
import { In } from "typeorm";
import { TopicSaveProps } from "../../infraestructure/types/topics";

export class topicService {
  async findById(id: number) {
    return await AppDataSource.manager.findOne(Topic, {
      where: {
        id,
      },
      relations: {
        unit: true,
      },
    });
  }

  async findAll(): Promise<Topic[] | []> {
    return await AppDataSource.manager.find(Topic, {
      relations: {
        unit: true,
      },
    });
  }

  async getTopicsByUnit(unit: number): Promise<Topic[] | []> {
    return await AppDataSource.manager.find(Topic, {
      where: {
        unit: {
          id: unit,
        },
      },
      relations: {
        unit: true,
      },
    });
  }

  async getTopicsByAsignature(asignature: number): Promise<Topic[] | []> {
    return await AppDataSource.manager.find(Topic, {
      where: {
        coursePeriodAsignature: {
          id: asignature,
        },
      },
      relations: {
        unit: true,
        coursePeriodAsignature: {
          asignature: true,
          courseperiod: {
            courses: true,
            periods: true,
          },
        },
      },
    });
  }

  async findByAsignature(asignature: number) {
    return await AppDataSource.manager.find(Topic, {
      where: {
        coursePeriodAsignature: {
          id: asignature,
        },
      },
      relations: {
        unit: true,
        coursePeriodAsignature: {
          asignature: true,
          courseperiod: {
            courses: true,
            periods: true,
          },
        },
      },
    });
  }

  async create(topic: TopicSaveProps) {
    await AppDataSource.manager.save(topic);
    return true;
  }

  async update(topic: Topic) {
    await AppDataSource.manager.save(topic);
    return true;
  }

  async delete(id: number) {
    await AppDataSource.manager.delete(Topic, { id });
    return true;
  }

  async findByArrayIds(ids: number[]) {
    return await AppDataSource.manager.find(Topic, {
      where: {
        id: In(ids),
      },
      relations: {
        unit: true,
      },
    });
  }
}
