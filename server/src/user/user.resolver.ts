import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user';
import { UpdateUserDTO } from './dto/update-user';
import { UserController } from './user.controller';
import { CreateProgressDTO } from './dto/create-progress';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { sign } from 'jsonwebtoken';
import { JwtGuard } from 'src/auth/jwt.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Response } from 'express';

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
}
