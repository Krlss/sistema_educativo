import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RolService } from './rol.service';
import { Rol } from './entities/rol.entity';
import { CreateRolDTO } from './dto/create-rol';
import { UpdateRolDTO } from './dto/update-rol';

@Resolver(() => Rol)
export class RolResolver {
  constructor(private readonly rolService: RolService) {}

  @Mutation(() => Rol)
  createRol(@Args('input') data: CreateRolDTO) {
    return this.rolService.create(data);
  }

  @Query(() => [Rol])
  roles() {
    return this.rolService.getMany();
  }

  @Query(() => Rol, { nullable: true })
  rol(@Args('id') id: string) {
    return this.rolService.get(id);
  }

  @Mutation(() => Rol)
  updateRol(@Args('input') data: UpdateRolDTO) {
    return this.rolService.update(data);
  }

  @Mutation(() => Rol)
  deleteRol(@Args('id') id: string) {
    return this.rolService.delete(id);
  }
}
