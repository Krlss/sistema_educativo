import { unitService } from "./unit.service";
import { Unit } from "./unit.entity";
import {
  unitCreateInput,
  unitUpdateInput,
} from "../../infraestructure/validations/units";

export class UnitController {
  private unitService: unitService;
  constructor() {
    this.unitService = new unitService();
  }

  async getUnits(): Promise<Unit[] | []> {
    return await this.unitService.findAll();
  }

  async getUnitById(id: number): Promise<Unit | null> {
    return await this.unitService.findById(id);
  }

  async createUnit(unit: unitCreateInput): Promise<boolean | unknown> {
    try {
      const _unit = new Unit();

      _unit.name = unit.name;
      // falta las asignaturas

      return await this.unitService.create(_unit);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateUnit(
    id: number,
    props: unitUpdateInput
  ): Promise<boolean | unknown> {
    try {
      const unit = await this.getUnitById(id);
      if (!unit) throw new Error("La unidad no existe");

      unit.name = props.name;
      unit.updatedAt = new Date();

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
