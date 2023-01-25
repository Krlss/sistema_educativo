import { unitService } from "./unit.service";
import { Unit } from "./unit.entity";
import {
  unitCreateInput,
  unitUpdateInput,
} from "../../infraestructure/validations/units";
import { asignatureService } from "../asignatures/asignature.service";
import { topicService } from "../topics/topic.service";
import { Topic } from "../topics/topic.entity";
import { coursePeriodAsignatureService } from "../coursePeriodAsignature/coursePeriodAsignature.service";
import { CoursePeriodAsignatureUnit } from "../coursePeriodAsignatureUnit/coursePeriodAsignatureUnit.entity";
import { coursePeriodAsignatureUnitService } from "../coursePeriodAsignatureUnit/coursePeriodAsignatureUnit.service";

export class UnitController {
  private unitService: unitService;
  private asignatureService: asignatureService;
  private topicService: topicService;
  private coursePeriodAsignatureService: coursePeriodAsignatureService;
  private coursePeriodAsignatureUnitService: coursePeriodAsignatureUnitService;
  constructor() {
    this.unitService = new unitService();
    this.asignatureService = new asignatureService();
    this.topicService = new topicService();
    this.coursePeriodAsignatureService = new coursePeriodAsignatureService();
    this.coursePeriodAsignatureUnitService =
      new coursePeriodAsignatureUnitService();
  }

  async getUnits(): Promise<Unit[] | []> {
    return await this.unitService.findAll();
  }

  async getUnitById(id: number): Promise<Unit | null> {
    return await this.unitService.findById(id);
  }

  async getUnitsByAsignature(asignature: number): Promise<Topic[] | []> {
    const asignatureFound = await this.asignatureService.findById(asignature);
    if (!asignatureFound) throw new Error("La asignatura no existe");

    return await this.topicService.findByAsignature(asignature);
  }

  async createUnit(data: unitCreateInput): Promise<boolean | unknown> {
    try {
      const unit = new Unit();
      unit.name = data.name;
      await this.unitService.create(unit);

      if (data.asignatures) {
        data.asignatures.forEach(async (asignature) => {
          const courseperiodasignature =
            await this.coursePeriodAsignatureService.getCoursePeriodAsignatureById(
              asignature
            );
          if (!courseperiodasignature)
            throw new Error("La asignatura no existe");

          const courseperiodasignatureunit = new CoursePeriodAsignatureUnit();
          courseperiodasignatureunit.coursePeriodAsignature =
            courseperiodasignature;
          courseperiodasignatureunit.unit = unit;
          await this.coursePeriodAsignatureUnitService.createCoursePeriodAsignatureUnit(
            courseperiodasignatureunit
          );
        });
      }

      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateUnit(
    id: number,
    data: unitUpdateInput
  ): Promise<boolean | unknown> {
    try {
      const unit = await this.getUnitById(id);
      if (!unit) throw new Error("La unidad no existe");

      unit.name = data.name;
      unit.updatedAt = new Date();
      await this.unitService.update(unit);

      if (data.asignatures) {
        data.asignatures.forEach(async (asignature) => {
          const courseperiodasignature =
            await this.coursePeriodAsignatureService.getCoursePeriodAsignatureById(
              asignature
            );
          if (!courseperiodasignature)
            throw new Error("La asignatura no existe");

          const courseperiodasignatureunit = new CoursePeriodAsignatureUnit();
          courseperiodasignatureunit.coursePeriodAsignature =
            courseperiodasignature;
          courseperiodasignatureunit.unit = unit;
          await this.coursePeriodAsignatureUnitService.createCoursePeriodAsignatureUnit(
            courseperiodasignatureunit
          );
        });
      }

      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteUnit(id: number): Promise<boolean | unknown> {
    try {
      const unit = await this.getUnitById(id);
      if (!unit) throw new Error("La unidad no existe");

      return await this.unitService.delete(id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
