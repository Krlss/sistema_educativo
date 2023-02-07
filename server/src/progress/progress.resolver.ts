import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProgressService } from './progress.service';
import { Progress } from './entities/progress.entity';
import { CreateProgressDTO } from './dto/create-progress';
import { UpdateProgressDTO } from './dto/update-progress';

@Resolver(() => Progress)
class ProgressResolver {
  constructor(private readonly progressService: ProgressService) {}

  /*   @Query(() => [Progress], { name: 'progress' })
  progresss() {
    return this.progressService.findAll();
  } */

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

  @Mutation(() => Progress)
  updateProgress(
    @Args('updateProgressInput') updateProgressInput: UpdateProgressDTO,
  ) {
    return this.progressService.update(
      updateProgressInput.id,
      updateProgressInput,
    );
  }

  @Mutation(() => Progress)
  removeProgress(@Args('id', { type: () => Int }) id: number) {
    return this.progressService.remove(id);
  }
}
