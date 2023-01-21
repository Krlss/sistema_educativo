import { AsignatureUpdateProps } from "../../infraestructure/types/asignatures";
import { asignatureCreateInput } from "../../infraestructure/validations/asignatures";
import { Asignature } from "./asignature.entity";
import { asignatureService } from "./asignature.service";
import { getGoogleDriveId } from "../../infraestructure/utils/image";
import { courseService } from "../courses/course.service";
import { unitService } from "../units/unit.service";

export class AsignatureController {
  private asignatureService: asignatureService;
  private courseService: courseService;
  private unitService: unitService;
  constructor() {
    this.asignatureService = new asignatureService();
    this.courseService = new courseService();
    this.unitService = new unitService();
  }

  async getAsignatures(): Promise<Asignature[] | []> {
    return await this.asignatureService.findAll();
  }

  async getAsignatureById(id: number): Promise<Asignature | null> {
    return await this.asignatureService.findById(id);
  }

  async createAsignature(
    data: asignatureCreateInput
  ): Promise<boolean | unknown> {
    try {
      const asignature = new Asignature();

      asignature.name = data.name;
      asignature.description = data.description;
      asignature.image = getGoogleDriveId(data.image);

      if (data?.courses?.length) {
        /* asignature.courses = await this.courseService.getCoursesByArrayId(
          data.courses
        ); */
      }

      if (data?.units?.length) {
        asignature.units = await this.unitService.getUnitsByArrayId(data.units);
      }

      return await this.asignatureService.create(asignature);
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

      if (data?.courses?.length) {
        /* asignature.courses = await this.courseService.getCoursesByArrayId(
          data.courses
        ); */
      }

      return await this.asignatureService.update(asignature);
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
