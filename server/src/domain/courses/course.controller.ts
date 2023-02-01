import {
  courseUpdateInput,
  courseCreateInput,
} from "../../infraestructure/validations/courses";
import { periodService } from "../periods/period.service";
import { Course } from "./course.entity";
import { courseService } from "./course.service";
import { coursePeriodService } from "../coursePeriod/coursePeriod.service";
import { CoursePeriod } from "../coursePeriod/coursePeriod.entity";

export class courseController {
  private courseService: courseService;
  private periodService: periodService;
  private coursePeriodService: coursePeriodService;

  constructor() {
    this.courseService = new courseService();
    this.periodService = new periodService();
    this.coursePeriodService = new coursePeriodService();
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
      await this.courseService.createCourse(course);

      if (data.periods) {
        const period = await this.periodService.getPeriodsByArrayId(
          data.periods
        );
        if (!period.length) throw new Error("El periodo no existe");
        /*  period.forEach(async (period) => {
          const course_period = new CoursePeriod();
          course_period.courses = course;
          course_period.periods = period;
          return await this.coursePeriodService.createCoursePeriod(
            course_period
          );
        }); */
      }

      return true;
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

      if (data.periods) {
        data.periods.forEach(async (period) => {
          const _period = await this.periodService.getPeriodById(period);
          /* if (_period) {
            const course_period = new CoursePeriod();
            course_period.courses = course;
            course_period.periods = _period;
            return await this.coursePeriodService.createCoursePeriod(
              course_period
            );
          } */
        });
      }
      await this.courseService.updateCourse(course);
      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async deleteCourse(id: number): Promise<boolean | unknown> {
    try {
      const course = await this.courseService.getCourseById(id);
      if (!course) throw new Error("El curso no existe");
      await this.courseService.deleteCourse(id);

      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
