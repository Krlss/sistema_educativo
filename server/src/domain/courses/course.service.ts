import { AppDataSource } from "../../infraestructure/config/typeorm";
import { Course } from "./course.entity";
import { In } from "typeorm";

export class courseService {
  async getCourseById(id: number) {
    return await AppDataSource.manager.findOne(Course, {
      where: {
        id,
      },
    });
  }

  async getCoursesByName(name: string): Promise<Course[] | []> {
    return await AppDataSource.manager.find(Course, {
      where: {
        name,
      },
    });
  }

  async getAllCourses(): Promise<Course[] | []> {
    return await AppDataSource.manager.find(Course);
  }

  async createCourse(course: Course) {
    await AppDataSource.manager.save(course);
    return true;
  }

  async updateCourse(course: Course) {
    await AppDataSource.manager.save(course);
    return true;
  }

  async deleteCourse(id: number) {
    await AppDataSource.manager.delete(Course, id);
    return true;
  }

  async getCoursesByArrayId(ids: number[]): Promise<Course[] | []> {
    return await AppDataSource.manager.find(Course, {
      where: {
        id: In(ids),
      },
    });
  }
}
