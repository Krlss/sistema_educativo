import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user';
import { UpdateUserDTO } from './dto/update-user';
import { UserController } from './user.controller';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userController: UserController) {}

  @Query(() => [User])
  users() {
    return this.userController.getMany();
  }
  @Query(() => User, { nullable: true })
  user(@Args('id') id: string) {
    return this.userController.get(id);
  }

  @Mutation(() => User, { nullable: true })
  createUser(@Args('input') data: CreateUserDTO) {
    return this.userController.create(data);
  }

  @Mutation(() => User, { nullable: true })
  updateUser(@Args('input') data: UpdateUserDTO) {
    return this.userController.update(data);
  }

  @Mutation(() => User, { nullable: true })
  deleteUser(@Args('id') id: string) {
    return this.userController.delete(id);
  }
}
