import { Course } from "./course.entity";
import { courseService } from "./course.service";
export class courseController {
  private courseService: courseService;
  constructor() {
    this.courseService = new courseService();
  }
  async getCourseById(id: number) {
    return await this.courseService.getCourseById(id);
  }
  async getCoursesByName(name: string) {
    return await this.courseService.getCoursesByName(name);
  }
  async getAllCourses() {
    return await this.courseService.getAllCourses();
  }
  async createCourse(name: string) {
    try {
      const course = new Course();
      course.name = name;
      return await this.courseService.createCourse(course);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  async updateCourse(id: number, name: string) {
    try {
      const course = await this.courseService.getCourseById(id);
      if (!course) {
        throw new Error("Course not found");
      }
      course.name = name;
      course.updatedAt = new Date();
      return await this.courseService.updateCourse(course);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async deleteCourse(id: number) {
    return await this.courseService.deleteCourse(id);
  }
}
