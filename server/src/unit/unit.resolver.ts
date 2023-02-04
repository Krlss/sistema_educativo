import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Unit } from './entities/unit.entity';
import { CreateUnitDTO } from './dto/create-unit';
import { UpdateUnitDTO } from './dto/update-unit';
import { UnitController } from './unit.controller';

@Resolver(() => Unit)
export class UnitResolver {
  constructor(private readonly unitController: UnitController) {}

  @Query(() => [Unit])
  units() {
    return this.unitController.getMany();
  }

  @Query(() => Unit, { nullable: true })
  unit(@Args('id') id: string) {
    return this.unitController.get(id);
  }

  @Mutation(() => Unit)
  createUnit(@Args('input') data: CreateUnitDTO) {
    return this.unitController.create(data);
  }

  @Mutation(() => Unit)
  updateUnit(@Args('input') data: UpdateUnitDTO) {
    return this.unitController.update(data);
  }

  @Mutation(() => Unit)
  deleteUnit(@Args('id') id: string) {
    return this.unitController.delete(id);
  }
}
