import { unitService } from "./unit.service";
import { Unit } from "./unit.entity";
import {
  unitCreateInput,
  unitUpdateInput,
} from "../../infraestructure/validations/units";
import { asignatureService } from "../asignatures/asignature.service";

export class UnitController {
  private unitService: unitService;
  private asignatureService: asignatureService;
  constructor() {
    this.unitService = new unitService();
    this.asignatureService = new asignatureService();
  }

  async getUnits(): Promise<Unit[] | []> {
    return await this.unitService.findAll();
  }

  async getUnitById(id: number): Promise<Unit | null> {
    return await this.unitService.findById(id);
  }

  async createUnit(data: unitCreateInput): Promise<boolean | unknown> {
    try {
      const unit = new Unit();
      unit.name = data.name;

      unit.asignatures = await this.asignatureService.findAllByArray(
        data.asignatures
      );

      return await this.unitService.create(unit);
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

      unit.asignatures = await this.asignatureService.findAllByArray(
        data.asignatures
      );

      return await this.unitService.update(unit);
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
