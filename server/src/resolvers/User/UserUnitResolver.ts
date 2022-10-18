import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { AppDataSource } from "../../config/typeorm";
import { ObjectID } from "typeorm";
import { UserUnit } from "../../entities/UserUnit";
import { User } from "../../entities/User";

@Resolver()
export class UserUnitResolver {

    /* Crear una nueva unidad de asignatura en el progreso del usuario */
    @Mutation(() => String)
    async createUserUnit(
        @Arg("userId") userId: string,
        @Arg("progressId") progressId: string,
        @Arg("asignatureId") asignatureId: string,
        @Arg("unitId") unitId: string
    ) {
        const user = await AppDataSource.manager.findOneBy(User, {
            _id: new ObjectID(userId),
        });
        if (!user) {
            return false;
        }
        const progress = user.progress.find(
            (progress) => progress._id.toString() === progressId
        );
        if (!progress) {
            return false;
        }
        const asignature = progress.asignature.find(
            (asignature) => asignature._id.toString() === asignatureId
        );
        if (!asignature) {
            return false;
        }
        const unit = new UserUnit();
        unit.id_unit = parseInt(unitId);
        unit.nota = 0;
        unit.topic = [];
        asignature.unit.push(unit);
        progress.asignature.push(asignature);
        user.progress.push(progress);
        await AppDataSource.manager.save(user);
        return unit._id.toString();
    }
    /* Eliminar unidades de una asignatura en el progreso del usuario */
    @Mutation(() => Boolean)
    async deleteUserUnit(
        @Arg("userId") userId: string,
        @Arg("progressId") progressId: string,
        @Arg("asignatureId") asignatureId: string,
        @Arg("unitId") unitId: string
    ) {
        const user = await AppDataSource.manager.findOneBy(User, {
            _id: new ObjectID(userId),
        });
        if (!user) {
            return false;
        }
        const progress = user.progress.find(
            (progress) => progress._id.toString() === progressId
        );
        if (!progress) {
            return false;
        }
        const asignature = progress.asignature.find(
            (asignature) => asignature._id.toString() === asignatureId
        );
        if (!asignature) {
            return false;
        }
        const unit = asignature.unit.find(
            (unit) => unit._id.toString() === unitId
        );
        if (!unit) {
            return false;
        }
        const index = asignature.unit.indexOf(unit);
        asignature.unit.splice(index, 1);
        progress.asignature.push(asignature);
        user.progress.push(progress);
        await AppDataSource.manager.save(user);
        return true;
    }

    /* Consulta la unidad de asignatura en el progreso del usuario */
    @Query(() => [UserUnit])
    async getUserUnit(
        @Arg("userId") userId: string,
        @Arg("progressId") progressId: string,
        @Arg("asignatureId") asignatureId: string, 
        @Arg("unitId") unitId: string = ""
    ) {
        const user = await AppDataSource.manager.findOneBy(User, {
            _id: new ObjectID(userId),
        });
        if (!user) {
            return false;
        }
        const progress = user.progress.find(
            (progress) => progress._id.toString() === progressId
        );
        if (!progress) {
            return false;
        }
        const asignature = progress.asignature.find(
            (asignature) => asignature._id.toString() === asignatureId
        );
        if (!asignature) {
            return false;
        }
        if (unitId === "") {
            return asignature.unit;
        }
        const unit = asignature.unit.find(
            (unit) => unit._id.toString() === unitId
        );
        if (!unit) {
            return false;
        }
        return unit;
    }

    /* Actualizar la nota de una unidad de asignatura en el progreso del usuario */
    @Mutation(() => Boolean)
    async updateUserUnitNota(
        @Arg("userId") userId: string,
        @Arg("progressId") progressId: string,
        @Arg("asignatureId") asignatureId: string,
        @Arg("unitId") unitId: string,
        @Arg("nota") nota: number
    ) {
        const user = await AppDataSource.manager.findOneBy(User, {
            _id: new ObjectID(userId),
        });
        if (!user) {
            return false;
        }
        const progress = user.progress.find(
            (progress) => progress._id.toString() === progressId
        );
        if (!progress) {
            return false;
        }
        const asignature = progress.asignature.find(
            (asignature) => asignature._id.toString() === asignatureId
        );
        if (!asignature) {
            return false;
        }
        const unit = asignature.unit.find(
            (unit) => unit._id.toString() === unitId
        );
        if (!unit) {
            return false;
        }
        unit.nota = nota;
        const index = asignature.unit.indexOf(unit);
        asignature.unit[index] = unit;
        const index2 = progress.asignature.indexOf(asignature);
        progress.asignature[index2] = asignature;
        const index3 = user.progress.indexOf(progress);
        user.progress[index3] = progress;
        await AppDataSource.manager.save(user);
        return true;
    }


}