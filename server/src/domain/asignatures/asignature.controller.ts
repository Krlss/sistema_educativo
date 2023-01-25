import { AsignatureUpdateProps } from "../../infraestructure/types/asignatures";
import { asignatureCreateInput } from "../../infraestructure/validations/asignatures";

import { getGoogleDriveId } from "../../infraestructure/utils/image";

import { Asignature } from "./asignature.entity";
import { CoursePeriodAsignature } from "../coursePeriodAsignature/coursePeriodAsignature.entity";

import { asignatureService } from "./asignature.service";
import { coursePeriodService } from "../coursePeriod/coursePeriod.service";
import { courseService } from "../courses/course.service";
import { unitService } from "../units/unit.service";
import { coursePeriodAsignatureService } from "../coursePeriodAsignature/coursePeriodAsignature.service";
import { periodService } from "../periods/period.service";

export class AsignatureController {
  private asignatureService: asignatureService;
  private coursePeriodService: coursePeriodService;
  private unitService: unitService;
  private coursePeriodAsignatureService: coursePeriodAsignatureService;
  private courseService: courseService;
  private periodService: periodService;

  constructor() {
    this.asignatureService = new asignatureService();
    this.coursePeriodService = new coursePeriodService();
    this.unitService = new unitService();
    this.coursePeriodAsignatureService = new coursePeriodAsignatureService();
    this.courseService = new courseService();
    this.periodService = new periodService();
  }

  async getAsignatures(): Promise<Asignature[] | []> {
    return await this.asignatureService.findAll();
  }

  async getAsignatureById(id: number): Promise<Asignature | null> {
    return await this.asignatureService.findById(id);
  }

  async getAsignaturesByCourseAndPeriod(
    course: number,
    period: number
  ): Promise<CoursePeriodAsignature[] | []> {
    const _course = await this.courseService.getCourseById(course);
    if (!_course) throw new Error("El curso no existe");
    const _period = await this.periodService.getPeriodById(period);
    if (!_period) throw new Error("El periodo no existe");

    const courseperiods =
      await this.coursePeriodService.getCoursePeriodsByCourseAndPeriod(
        _course,
        _period
      );
    if (courseperiods.length === 0)
      throw new Error("No hay cursos en este periodo");

    const courseperiodids = courseperiods.map(
      (courseperiod) => courseperiod.id
    );

    return await this.coursePeriodAsignatureService.getAsignaturesByCoursePeriods(
      courseperiodids
    );
  }

  async getAsignaturesByPeriod(
    period: number
  ): Promise<CoursePeriodAsignature[] | []> {
    const _period = await this.periodService.getPeriodById(period);
    if (!_period) throw new Error("El periodo no existe");

    const courseperiods =
      await this.coursePeriodService.getCoursePeriodsByPeriod(_period);
    if (courseperiods.length === 0)
      throw new Error("No hay cursos en este periodo");

    const courseperiodids = courseperiods.map(
      (courseperiod) => courseperiod.id
    );

    return await this.coursePeriodAsignatureService.getAsignaturesByCoursePeriods(
      courseperiodids
    );
  }

  async createAsignature(
    data: asignatureCreateInput
  ): Promise<boolean | unknown> {
    try {
      const asignature = new Asignature();

      asignature.name = data.name;
      asignature.description = data.description;
      asignature.image = getGoogleDriveId(data.image);

      await this.asignatureService.create(asignature);

      if (data.courses) {
        data.courses.forEach(async (course) => {
          const courseperiod =
            await this.coursePeriodService.getCoursePeriodById(course);
          if (courseperiod) {
            const courseperiodasignature = new CoursePeriodAsignature();
            courseperiodasignature.asignature = asignature;
            courseperiodasignature.courseperiod = courseperiod;
            await this.coursePeriodAsignatureService.createCoursePeriodAsignature(
              courseperiodasignature
            );
          }
        });
      }

      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateAsignature(
    id: number,
    data: AsignatureUpdateProps
  ): Promise<boolean | unknown> {
    try {
      const asignature = await this.getAsignatureById(id);
      if (!asignature) throw new Error("La asignatura no existe");

      asignature.name = data.name;
      asignature.description = data.description;
      asignature.image = data.image;
      asignature.updatedAt = new Date();

      await this.asignatureService.update(asignature);

      const courseperiodasignatures: CoursePeriodAsignature[] = [];

      if (data.courses) {
        data.courses.forEach(async (course) => {
          const courseperiod =
            await this.coursePeriodService.getCoursePeriodById(course);
          if (courseperiod) {
            const courseperiodasignature = new CoursePeriodAsignature();
            courseperiodasignature.asignature = asignature;
            await this.coursePeriodAsignatureService.createCoursePeriodAsignature(
              courseperiodasignature
            );
            courseperiodasignatures.push(courseperiodasignature);
          }
        });
      }

      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteAsignature(id: number): Promise<boolean | unknown> {
    try {
      const asignature = await this.getAsignatureById(id);
      if (!asignature) throw new Error("La asignatura no existe");

      return await this.asignatureService.delete(id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
