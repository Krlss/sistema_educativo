import { Controller } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user';
import { UpdateUserDTO } from './dto/update-user';
import { UserService } from './user.service';
import { hash } from 'src/common/helpers/bcrypt.helpers';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  async getMany() {
    return await this.userService.getMany();
  }

  async get(id: string) {
    return await this.userService.get(id);
  }

  async create(data: CreateUserDTO) {
    return await this.userService.create({
      ...data,
      password: await hash(data.password),
    });
  }

  async update(data: UpdateUserDTO) {
    return await this.userService.update({
      ...data,
      ...(data.password && { password: await hash(data.password) }),
    });
  }

  async delete(id: string) {
    return await this.userService.delete(id);
  }
}
