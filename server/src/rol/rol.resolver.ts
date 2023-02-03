import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RolController } from './rol.controller';
import { Rol } from './entities/rol.entity';
import { CreateRolDTO } from './dto/create-rol';
import { UpdateRolDTO } from './dto/update-rol';

@Resolver(() => Rol)
export class RolResolver {
  constructor(private readonly rolController: RolController) {}

  @Mutation(() => Rol)
  createRol(@Args('input') data: CreateRolDTO) {
    return this.rolController.create(data);
  }

  @Query(() => [Rol])
  roles() {
    return this.rolController.getMany();
  }

  @Query(() => Rol, { nullable: true })
  rol(@Args('id') id: string) {
    return this.rolController.get(id);
  }

  @Mutation(() => Rol)
  updateRol(@Args('input') data: UpdateRolDTO) {
    return this.rolController.update(data);
  }

  @Mutation(() => Rol)
  deleteRol(@Args('id') id: string) {
    return this.rolController.delete(id);
  }
}
