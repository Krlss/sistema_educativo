import { Resolver, Query, Mutation, Arg } from "type-graphql";

import { AppDataSource } from "../../config/typeorm";
import { User } from "../../entities/User";

import { ObjectID } from 'typeorm';
import { UserProgress } from "../../entities/UserProgress";

@Resolver()
export class UserProgressResolver {

    /* Crea un nuevo progreso de usuario */
    @Mutation(() => String)
    async createUserProgress(
        @Arg("userId") userId: string,
    ) {
        const user = await AppDataSource.manager.findOneBy(User, {
            _id: new ObjectID(userId)
        });
        if(!user) {
            return false;
        }
        const userProgress = new UserProgress();
        userProgress.asignature = [];
        user.progress.push(userProgress);
        await AppDataSource.manager.save(user);
        return userProgress._id.toString();
    }

    /* Elimina un progreso de usuario */
    @Mutation(() => Boolean)
    async DeleteUserProgress(
        @Arg("userId") userId: string,
        @Arg("userProgressId") userProgressId: string
    ) {
        const user = await AppDataSource.manager.findOneBy(User, {
            _id: new ObjectID(userId)
        })
        if (!user) {
            return false;
        }
        const progress = user.progress.find((progress) => progress._id.toString() === userProgressId);
        if(!progress) {
            return false;
        }
        user.progress = user.progress.filter((progress) => progress._id.toString() !== userProgressId);
        await AppDataSource.manager.save(user);
        return true;
    }

    /* Consulta un progreso de usuario por medio del _id */
    @Query(() => [UserProgress])
    async getUserProgressId(
        @Arg("userId") userId: string,
        @Arg("userProgressId") userProgressId: string
    ) {
        const user = await AppDataSource.manager.findOneBy(User, {
            _id: new ObjectID(userId)
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

}