import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { AppDataSource } from "../../config/typeorm";
import { ObjectID } from "typeorm";
import { UserTopic } from "../../entities/UserTopic";
import { User } from "../../entities/User";

@Resolver()
export class UserTopicResolver {
    /* Agregar un tema en la unidad de la asignatura en el progreso del usuario */
    @Mutation(() => String)
    async createUserTopic(
        @Arg("userId") userId: string,
        @Arg("progressId") progressId: string,
        @Arg("asignatureId") asignatureId: string,
        @Arg("unitId") unitId: string,
        @Arg("topicId") topicId: string
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
        const topic = new UserTopic();
        topic.id_topic = parseInt(topicId);
        topic.nota = 0;
        unit.topic.push(topic);
        asignature.unit.push(unit);
        progress.asignature.push(asignature);
        user.progress.push(progress);
        await AppDataSource.manager.save(user);
        return topic._id.toString();
    }

    /* Eliminar un tema en la unidad de la asignatura en el progreso del usuario */
    @Mutation(() => Boolean)
    async deleteUserTopic(
        @Arg("userId") userId: string,
        @Arg("progressId") progressId: string,
        @Arg("asignatureId") asignatureId: string,
        @Arg("unitId") unitId: string,
        @Arg("topicId") topicId: string
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
        const topic = unit.topic.find(
            (topic) => topic._id.toString() === topicId
        );
        if (!topic) {
            return false;
        }
        unit.topic = unit.topic.filter(
            (topic) => topic._id.toString() !== topicId
        );
        asignature.unit.push(unit);
        progress.asignature.push(asignature);
        user.progress.push(progress);
        await AppDataSource.manager.save(user);
        return true;
    }

    /* Obtener un tema en la unidad de la asignatura en el progreso del usuario */
    @Query(() => UserTopic)
    async getUserTopic(
        @Arg("userId") userId: string,
        @Arg("progressId") progressId: string,
        @Arg("asignatureId") asignatureId: string,
        @Arg("unitId") unitId: string,
        @Arg("topicId") topicId: string = ""
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
        if (topicId === "") {
            return unit.topic;
        }
        const topic = unit.topic.find(
            (topic) => topic._id.toString() === topicId
        );
        if (!topic) {
            return false;
        }
        return topic;
    }

    /* Actualizar un tema en la unidad de la asignatura en el progreso del usuario */
    @Mutation(() => Boolean)
    async updateUserTopic(
        @Arg("userId") userId: string,
        @Arg("progressId") progressId: string,
        @Arg("asignatureId") asignatureId: string,
        @Arg("unitId") unitId: string,
        @Arg("topicId") topicId: string,
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
        const topic = unit.topic.find(
            (topic) => topic._id.toString() === topicId
        );
        if (!topic) {
            return false;
        }
        topic.nota = nota;
        const index = unit.topic.findIndex(
            (topic) => topic._id.toString() === topicId
        );
        unit.topic[index] = topic;
        const index2 = asignature.unit.findIndex(
            (unit) => unit._id.toString() === unitId
        );
        asignature.unit[index2] = unit;
        const index3 = progress.asignature.findIndex(
            (asignature) => asignature._id.toString() === asignatureId
        );
        progress.asignature[index3] = asignature;
        const index4 = user.progress.findIndex(
            (progress) => progress._id.toString() === progressId
        );
        user.progress[index4] = progress;
        await AppDataSource.manager.save(user);
        return true;
    }
}