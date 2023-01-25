import periodCreateInput from "../../infraestructure/validations/periods/period.create.inputs";
import periodUpdateInput from "../../infraestructure/validations/periods/period.update.inputs";
import { Period } from "./period.entity";
import { periodService } from "./period.service";
import { courseService } from "../courses/course.service";
import { CoursePeriod } from "../coursePeriod/coursePeriod.entity";
import { coursePeriodService } from "../coursePeriod/coursePeriod.service";

export class periodController {
  private periodService: periodService;
  private courseService: courseService;
  private coursePeriodService: coursePeriodService;
  constructor() {
    this.periodService = new periodService();
    this.courseService = new courseService();
    this.coursePeriodService = new coursePeriodService();
  }
  async getPeriodById(id: number) {
    return await this.periodService.getPeriodById(id);
  }
  async getAllPeriods() {
    return await this.periodService.getAllPeriods();
  }

  async createPeriod(data: periodCreateInput) {
    const period = new Period();
    period.name = data.name;
    period.updatedAt = new Date();
    await this.periodService.createPeriod(period);
    if (data.courses) {
      data.courses.forEach(async (course) => {
        const courseperiod = await this.courseService.getCourseById(course);
        if (courseperiod) {
          const newcourseperiod = new CoursePeriod();
          newcourseperiod.courses = courseperiod;
          newcourseperiod.periods = period;
          await this.coursePeriodService.createCoursePeriod(newcourseperiod);
        }
      });
    }
    return true;
  }

  async updatePeriod(id: number, data: periodUpdateInput) {
    const period = await this.getPeriodById(id);
    if (!period) throw new Error("Period not found");
    if (data.name) period.name = data.name;
    await this.periodService.updatePeriod(period);
    if (data.courses) {
      data.courses.forEach(async (course) => {
        const _course = await this.courseService.getCourseById(course);
        if (_course) {
          const newcourseperiod = new CoursePeriod();
          newcourseperiod.courses = _course;
          newcourseperiod.periods = period;
          await this.coursePeriodService.createCoursePeriod(newcourseperiod);
        }
      });
    }
    return true;
  }

  async deletePeriod(id: number) {
    return await this.periodService.deletePeriod(id);
  }

  async getPeriodsByArrayId(ids: number[]) {
    return await this.periodService.getPeriodsByArrayId(ids);
  }
}
