import {
  courseUpdateInput,
  courseCreateInput,
} from "../../infraestructure/validations/courses";
import { asignatureService } from "../asignatures/asignature.service";
import { Course } from "./course.entity";
import { courseService } from "./course.service";
export class courseController {
  private courseService: courseService;
  private asignatureService: asignatureService;
  constructor() {
    this.courseService = new courseService();
    this.asignatureService = new asignatureService();
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

  async createCourse(data: courseCreateInput): Promise<boolean | unknown> {
    try {
      const course = new Course();
      course.name = data.name;

      if (data?.asignatures?.length) {
        course.asignatures =
          await this.asignatureService.getAsignaturesByArrayId(
            data.asignatures
          );
      }

      return await this.courseService.createCourse(course);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateCourse(
    id: number,
    data: courseUpdateInput
  ): Promise<boolean | unknown> {
    try {
      const course = await this.courseService.getCourseById(id);
      if (!course) throw new Error("El curso no existe");

      course.name = data.name;
      course.updatedAt = new Date();

      return await this.courseService.updateCourse(course);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async deleteCourse(id: number): Promise<boolean | unknown> {
    const course = await this.courseService.getCourseById(id);
    if (!course) throw new Error("El curso no existe");

    return await this.courseService.deleteCourse(id);
  }
}
