import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserController } from './user.controller';
@Module({
  providers: [UserResolver, UserService, UserController],
  controllers: [UserController],
})
export class UserModule {}
