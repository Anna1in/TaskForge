import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class TaskRepository {
  constructor (
    private readonly prismaService: PrismaService,
  ) {}

  create (data: Prisma.TaskUncheckedCreateInput) {
    return this.prismaService.task.create({ data });
  }

  findMany (where: Prisma.TaskWhereInput) {
    return this.prismaService.task.findMany({ where });
  }

  findById (id: string) {
    return this.prismaService.task.findUnique({ where: { id} });
  }

  updateById (id: string, data: Prisma.TaskUncheckedUpdateInput) {
    return this.prismaService.task.update({
      where: { id },
      data,
    })
  }

  deleteById (id: string) {
    return this.prismaService.task.delete({ where: { id } });
  }
}