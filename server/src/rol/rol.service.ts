import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateRolDTO } from './dto/create-rol';
import { UpdateRolDTO } from './dto/update-rol';

@Injectable()
export class RolService {
  constructor(private readonly prismaService: PrismaService) {}
  async getMany() {
    return await this.prismaService.role.findMany({
      include: {
        users: true,
      },
    });
  }
  async get(id: string) {
    return await this.prismaService.role.findUnique({
      where: {
        id,
      },
      include: {
        users: true,
      },
    });
  }
  async create(data: CreateRolDTO) {
    return await this.prismaService.role.create({
      data: {
        ...data,
        ...(data.users && {
          users: {
            connect: data.users.map((id) => ({ id })),
          },
        }),
      },
    });
  }
  async update(data: UpdateRolDTO) {
    const find = await this.get(data.id);
    if (!find) throw new Error('No se encontro el rol');
    return await this.prismaService.role.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
        users: {
          connect: data.users.map((id) => ({ id })),
        },
      },
    });
  }
  async delete(id: string) {
    const find = await this.get(id);
    if (!find) throw new Error('No se encontro el rol');
    return await this.prismaService.role.delete({
      where: {
        id,
      },
    });
  }
}
