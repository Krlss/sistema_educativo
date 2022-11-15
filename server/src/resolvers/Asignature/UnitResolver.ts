import { Resolver, Query, Mutation, Arg } from "type-graphql";
const { ObjectId } = require("mongodb");
import { AppDataSource } from "../../config/typeorm";
import { Asignature } from "../../entities/Asignature";
import { Unit } from "../../entities/Unit";

@Resolver()
export class UnitResolver {
  /* Crea una nueva unidad con un arreglo de temas vacio */
  @Mutation(() => String)
  async createUnit(
    @Arg("name") name: string,
    @Arg("asignatureId") asignatureId: string
  ) {
    const asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(asignatureId),
    });
    if (!asignature) {
      return false;
    }
    const unit = new Unit();
    unit._id = new ObjectId();
    unit.name = name;
    unit.topic = [];

    asignature.unit.push(unit);
    await AppDataSource.manager.update(Asignature, asignature._id, asignature);
    return unit._id;
  }

  /* Elimina una unidad */
  @Mutation(() => Boolean)
  async DeleteUnit(
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string
  ) {
    const asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(asignatureId),
    });
    if (!asignature) {
      return false;
    }
    const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return false;
    }
    asignature.unit = asignature.unit.filter(
      (unit) => unit._id.toString() !== unitId
    );
    await AppDataSource.manager.update(Asignature, asignature._id, asignature);
    return true;
  }

  /* Consulta una unidad por medio del _id */
  @Query(() => Unit)
  async getUnit(
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string
  ) {
    const asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(asignatureId),
    });
    if (!asignature) {
      return false;
    }
    const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return false;
    }
    return unit;
  }

  /* Consulta todas las unidades */
  @Query(() => [Unit])
  async getUnits(@Arg("asignatureId") asignatureId: string) {
    const asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(asignatureId),
    });
    if (!asignature) {
      return [];
    }
    return asignature.unit;
  }

  /* Actualizar una unidad */
  @Mutation(() => Boolean)
  async updateUnit(
    @Arg("asignatureId") asignatureId: string,
    @Arg("unitId") unitId: string,
    @Arg("name") name: string
  ) {
    const asignature = await AppDataSource.manager.findOneBy(Asignature, {
      _id: new ObjectId(asignatureId),
    });
    if (!asignature) {
      return false;
    }
    const unit = asignature.unit.find((unit) => unit._id.toString() === unitId);
    if (!unit) {
      return false;
    }
    unit.name = name;
    const index = asignature.unit.findIndex(
      (unit) => unit._id.toString() === unitId
    );
    asignature.unit[index] = unit;
    await AppDataSource.manager.update(Asignature, asignature._id, asignature);
    return true;
  }
}
