import { AsignatureUpdateProps } from "../../infraestructure/types/asignatures";
import { asignatureCreateInput } from "../../infraestructure/validations/asignatures";
import { Asignature } from "./asignature.entity";
import { asignatureService } from "./asignature.service";
import { getGoogleDriveId } from "../../infraestructure/utils/image";

export class AsignatureController {
  private asignatureService: asignatureService;
  constructor() {
    this.asignatureService = new asignatureService();
  }

  async getAsignatures(): Promise<Asignature[] | []> {
    return await this.asignatureService.findAll();
  }

  async getAsignatureById(id: number): Promise<Asignature | null> {
    return await this.asignatureService.findById(id);
  }

  async createAsignature(
    asignature: asignatureCreateInput
  ): Promise<boolean | unknown> {
    try {
      const _asignature = new Asignature();

      _asignature.name = asignature.name;
      _asignature.description = asignature.description;
      _asignature.image = getGoogleDriveId(asignature.image);
      // falta las unidades

      return await this.asignatureService.create(_asignature);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateAsignature(
    id: number,
    props: AsignatureUpdateProps
  ): Promise<boolean | unknown> {
    try {
      const asignature = await this.getAsignatureById(id);
      if (!asignature) throw new Error("La asignatura no existe");

      asignature.name = props.name;
      asignature.description = props.description;
      asignature.image = props.image;
      asignature.updatedAt = new Date();

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
