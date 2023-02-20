import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProgressService } from './progress.service';
import { Progress } from './entities/progress.entity';
import { CreateProgressDTO } from './dto/create-progress';
import { UpdateProgressDTO } from './dto/update-progress';
import { ProgressController } from './progress.controller';

@Resolver(() => Progress)
export class ProgressResolver {
  constructor(
    private readonly progressService: ProgressService,
    private readonly progressController: ProgressController,
  ) {}

  @Query(() => Progress, { name: 'progress' })
  progress(@Args('id', { type: () => Int }) id: number) {
    return this.progressService.get(id);
  }

  @Mutation(() => Progress)
  createProgress(
    @Args('createProgressInput') createProgressInput: CreateProgressDTO,
  ) {
    return this.progressService.create(createProgressInput);
  }

  @Mutation(() => Boolean)
  updateProgress(@Args('updateProgressInput') data: UpdateProgressDTO) {
    return this.progressController.updateProgress(data);
  }

  @Mutation(() => Progress)
  removeProgress(@Args('id', { type: () => Int }) id: number) {
    return this.progressService.remove(id);
  }
}
