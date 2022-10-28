import { Resolver, Query, Mutation, Arg } from "type-graphql";

import { AppDataSource } from "../../config/typeorm";
import { User } from "../../entities/User";
const {ObjectId}  = require('mongodb');
import { UserProgress } from "../../entities/UserProgress";

@Resolver()
export class UserProgressResolver {

    /* Crea un nuevo progreso de usuario */
    @Mutation(() => String)
    async createUserProgress(
        @Arg("userId") userId: string,
    ) {
        const user = await AppDataSource.manager.findOneBy(User, {
            _id: new ObjectId(userId)
        });
        if(!user) {
            return false;
        }
        const userProgress = new UserProgress();
        userProgress._id = user.progress.length + 1;
        userProgress.asignature = [];
        user.progress.push(userProgress);
        await AppDataSource.manager.update(User, user._id, user);
        return userProgress._id.toString();
    }

    /* Elimina un progreso de usuario */
    @Mutation(() => Boolean)
    async DeleteUserProgress(
        @Arg("userId") userId: string,
        @Arg("userProgressId") userProgressId: string
    ) {
        const user = await AppDataSource.manager.findOneBy(User, {
            _id: new ObjectId(userId)
        })
        if (!user) {
            return false;
        }
        const progress = user.progress.find((progress) => progress._id.toString() === userProgressId);
        if(!progress) {
            return false;
        }
        user.progress = user.progress.filter((progress) => progress._id.toString() !== userProgressId);
        await AppDataSource.manager.update(User, user._id, user);
        return true;
    }

    /* Consulta un progreso de usuario por medio del _id */
    @Query(() => [UserProgress])
    async getUserProgressId(
        @Arg("userId") userId: string,
        @Arg("userProgressId") userProgressId: string
    ) {
        const user = await AppDataSource.manager.findOneBy(User, {
            _id: new ObjectId(userId)
        });
        if(!user) {
            return false;
        }
        const progress = user.progress.find((progress) => progress._id.toString() === userProgressId);
        if (!progress) {
            return false;
        }
        return progress;
    }
    /* Actualiza el progreso de un usuario */
    @Mutation(() => Boolean)
    async updateUserProgress(
        @Arg("userId") userId: string,
        @Arg("userProgressId") userProgressId: string,
        @Arg("name") name: string
    ) {
        const user = await AppDataSource.manager.findOneBy(User, {
            _id: new ObjectId(userId)
        });
        if(!user) {
            return false;
        }
        const progress = user.progress.find((progress) => progress._id.toString() === userProgressId);
        if(!progress) {
            return false;
        }
        progress.name = name;
        await AppDataSource.manager.update(User, user._id, user);
        return true;
    }

}