import { courseService } from "../courses/course.service";
import { periodService } from "../periods/period.service";
import { coursePeriodService } from "../course_period/course_period.service";
import { CoursePeriod } from "./course_period.entity";

export class coursePeriodController {
  private courseService: courseService;
  private periodService: periodService;
  private coursePeriodService: coursePeriodService;
  constructor() {
    this.courseService = new courseService();
    this.periodService = new periodService();
    this.coursePeriodService = new coursePeriodService();
  }
  async getCoursePeriodById(id: number) {
    return await this.coursePeriodService.getCoursePeriodById(id);
  }
  async getAllCoursePeriods() {
    return await this.coursePeriodService.getAllCoursePeriods();
  }
  async createCoursePeriod(courseId: number, periodId: number) {
    const course = await this.courseService.getCourseById(courseId);
    if (!course) throw new Error("El curso no existe");
    const period = await this.periodService.getPeriodById(periodId);
    if (!period) throw new Error("El periodo no existe");

    const course_service = new CoursePeriod();
    course_service.courses = course;
    course_service.periods = period;

    return await this.coursePeriodService.createCoursePeriod(course_service);
  }
  async updateCoursePeriod(id: number, courseId: number, periodId: number) {
    const coursePeriod = await this.coursePeriodService.getCoursePeriodById(id);
    if (!coursePeriod) throw new Error("El curso no existe");
    if (courseId) {
      const course = await this.courseService.getCourseById(courseId);
      if (!course) throw new Error("El curso no existe");
      coursePeriod.courses = course;
    }
    if (periodId) {
      const period = await this.periodService.getPeriodById(periodId);
      if (!period) throw new Error("El periodo no existe");
      coursePeriod.periods = period;
    }
    return await this.coursePeriodService.updateCoursePeriod(coursePeriod);
  }
  async deleteCoursePeriod(id: number) {
    return await this.coursePeriodService.deleteCoursePeriod(id);
  }
}
