import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ObjectType,
  Field,
} from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user';
import { UpdateUserDTO } from './dto/update-user';
import { UserController } from './user.controller';
import { CreateProgressDTO } from './dto/create-progress';
import { UpdateProgressDTO } from 'src/progress/dto/update-progress';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { sign } from 'jsonwebtoken';
import { JwtGuard } from 'src/auth/jwt.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Response } from 'express';
import { Progress } from 'src/progress/entities/progress.entity';
import { Asignature } from 'src/asignature/entities/asignature.entity';
import { CustomProgress } from 'src/progress/entities/custom-progress.entity';
import { CustomAsignatureInscribed } from 'src/asignature/entities/customAsignatureInscribed';
import { ProgressController } from 'src/progress/progress.controller';
import { Grades } from './entities/userGrades';
import { Buffer } from 'buffer';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userController: UserController) {}

  @Query(() => [User])
  users() {
    return this.userController.getMany();
  }

  @Query(() => User, { nullable: true })
  @UseGuards(JwtGuard, new RolesGuard(['student', 'teacher', 'admin']))
  user(@Args('id') id: string) {
    return this.userController.get(id);
  }

  @Query(() => [User], { nullable: true })
  @UseGuards(JwtGuard, new RolesGuard(['teacher', 'admin']))
  students() {
    return this.userController.getStudents();
  }

  @Query(() => [Asignature], { nullable: true })
  getAsignaturesUserInscribed(@Args('id') id: string) {
    return this.userController.getAsignaturesByUserId(id);
  }

  @Query(() => [CustomProgress], { nullable: true })
  getUserProgress(@Args('userId') userId: string) {
    return this.userController.getProgressByUserId(userId);
  }

  @Query(() => CustomAsignatureInscribed, { nullable: true })
  getAsignatureUserInscribed(
    @Args('userId') userId: string,
    @Args('asignatureId') asignatureId: string,
  ) {
    return this.userController.getAsignatureByUserId(userId, asignatureId);
  }

  @Query(() => String)
  @UseGuards(AuthGuard)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Context('user') user: User,
    @Context('res') res: Response,
  ) {
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      roles: user.roles,
    };

    const accessToken = sign(payload, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    res.cookie('rt', accessToken, {
      httpOnly: false,
      sameSite: 'none',
      path: '/',
      secure: true,
      domain: 'localhost',
      expires,
    });

    return accessToken;
  }

  @Query(() => String, { nullable: true })
  @UseGuards(JwtGuard, new RolesGuard(['student', 'teacher', 'admin']))
  logout(@Context('res') res: Response) {
    res.clearCookie('rt', {
      httpOnly: false,
      sameSite: 'none',
      path: '/',
      secure: true,
      domain: 'localhost',
    });
    return 'ok';
  }

  @Query(() => String, { nullable: true })
  async getGradesByAsignature(@Args('periodCourseId') periodCourseId: number) {
    return await this.userController.getGradesByAsignature(periodCourseId);
  }

  @Query(() => String, { nullable: true })
  async getList(@Args('periodCourseId') periodCourseId: number) {
    return await this.userController.getList(periodCourseId);
  }

  @Mutation(() => User, { nullable: true })
  createUser(@Args('input') data: CreateUserDTO) {
    return this.userController.create(data);
  }

  @Mutation(() => User, { nullable: true })
  updateUser(@Args('input') data: UpdateUserDTO) {
    return this.userController.update(data);
  }

  @Mutation(() => Boolean, { nullable: true })
  enrollUser(@Args('data') data: CreateProgressDTO) {
    return this.userController.enroll(data);
  }

  @Mutation(() => User, { nullable: true })
  deleteUser(@Args('id') id: string) {
    return this.userController.delete(id);
  }

  @Mutation(() => Boolean, { nullable: true })
  @UseGuards(JwtGuard, new RolesGuard(['student', 'teacher', 'admin']))
  updateFinishedTopic(
    @Args('topicId') topicId: string,
    @Context('user') user: User,
  ) {
    return this.userController.updateUserTopic(user.id, topicId);
  }

  @Mutation(() => Boolean)
  updateProgress(@Args('updateProgressInput') data: UpdateProgressDTO) {
    return this.userController.updateProgress(data);
  }
}
