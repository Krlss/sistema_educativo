import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AsignatureController } from './asignature.controller';
import { Asignature } from './entities/asignature.entity';
import { CreateAsignatureDTO } from './dto/create-asignature';
import { UpdateAsignatureDTO } from './dto/update-asignature';

@Resolver(() => Asignature)
export class AsignatureResolver {
  constructor(private readonly asignatureController: AsignatureController) {}

  @Query(() => [Asignature], { nullable: true })
  asignatures() {
    return this.asignatureController.getMany();
  }

  @Query(() => Asignature, { nullable: true })
  asignature(@Args('id') id: string) {
    return this.asignatureController.get(id);
  }

  @Query(() => Asignature, { nullable: true })
  topicsByAsignatureAndUser(
    @Args('asignatureId') asignatureId: string,
    @Args('userId') userId: string,
    @Args('unitId') unitId: string,
  ) {
    return this.asignatureController.getTopicsByAsignatureAndUser(
      asignatureId,
      userId,
      unitId,
    );
  }

  @Mutation(() => Asignature)
  createAsignature(@Args('input') data: CreateAsignatureDTO) {
    return this.asignatureController.create(data);
  }

  @Mutation(() => Asignature)
  updateAsignature(@Args('input') data: UpdateAsignatureDTO) {
    return this.asignatureController.update(data);
  }

  @Mutation(() => Asignature)
  deleteAsignature(@Args('id') id: string) {
    return this.asignatureController.delete(id);
  }
}
