import { AppDataSource } from "../../infraestructure/config/typeorm";
import { Course } from "./course.entity";

export class courseService {
  async getCourseById(id: number) {
    const course = await AppDataSource.manager.findOne(Course, {
      where: {
        id,
      },
    });
    return course;
  }

  async getCoursesByName(name: string) {
    const course = await AppDataSource.manager.find(Course, {
      where: {
        name,
      },
    });
    return course;
  }

  async getAllCourses() {
    const courses = await AppDataSource.manager.find(Course);
    return courses;
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
}
