import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicResolver } from './topic.resolver';
import { TopicController } from './topic.controller';

@Module({
  providers: [TopicResolver, TopicService, TopicController],
  controllers: [TopicController],
})
export class TopicModule {}
