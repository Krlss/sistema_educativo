import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Period } from './entities/period.entity';
import { CreatePeriodDTO } from './dto/create-period';
import { UpdatePeriodDTO } from './dto/update-period';
import { PeriodController } from './period.controller';

@Resolver(() => Period)
export class PeriodResolver {
  constructor(private readonly periodController: PeriodController) {}

  @Mutation(() => Period, { nullable: true })
  async createPeriod(
    @Args({ name: 'input', type: () => CreatePeriodDTO }) data: CreatePeriodDTO,
  ) {
    return await this.periodController.create(data);
  }

  @Query(() => [Period])
  periods() {
    return this.periodController.getMany();
  }

  @Query(() => Period, { nullable: true })
  async period(@Args('id') id: string) {
    return await this.periodController.get(id);
  }

  @Mutation(() => Period, { nullable: true })
  async updatePeriod(
    @Args({ name: 'input', type: () => UpdatePeriodDTO }) data: UpdatePeriodDTO,
  ) {
    return await this.periodController.update(data);
  }

  @Mutation(() => Period, { nullable: true })
  async deletePeriod(@Args('id') id: string) {
    return await this.periodController.delete(id);
  }
}
