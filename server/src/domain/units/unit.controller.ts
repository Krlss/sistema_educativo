import { unitService } from "./unit.service";
import { Unit } from "./unit.entity";
import {
  unitCreateInput,
  unitUpdateInput,
} from "../../infraestructure/validations/units";
import { asignatureService } from "../asignatures/asignature.service";
import { topicService } from "../topics/topic.service";
import { Topic } from "../topics/topic.entity";

export class UnitController {
  private unitService: unitService;
  private asignatureService: asignatureService;
  private topicService: topicService;
  constructor() {
    this.unitService = new unitService();
    this.asignatureService = new asignatureService();
    this.topicService = new topicService();
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
