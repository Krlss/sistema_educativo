import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user';
import { UpdateUserDTO } from './dto/update-user';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMany() {
    return await this.prismaService.user.findMany({
      include: {
        roles: true,
      },
    });
  }

  async get(id: string) {
    return await this.prismaService.user.findUnique({
      where: {
        id,
      },
      include: {
        roles: true,
      },
    });
  }

  async create(data: CreateUserDTO) {
    return await this.prismaService.user.create({
      data: {
        ...data,
        ...(data.roles && {
          roles: {
            connect: data.roles.map((id) => ({ id })),
          },
        }),
      },
    });
  }

  async update(data: UpdateUserDTO) {
    const find = await this.get(data.id);
    if (!find) throw new Error('No se encontro el usuario');
    return await this.prismaService.user.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
        ...(data.roles && {
          roles: {
            set: data.roles.map((id) => ({ id })),
          },
        }),
      },
    });
  }

  async delete(id: string) {
    const find = await this.get(id);
    if (!find) throw new Error('No se encontro el usuario');
    return await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
