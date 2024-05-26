import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';

@Injectable()
export class ProjectRepository {
  constructor (
    private readonly prismaService: PrismaService,
  ) {}

  findById (id: string) {
    return this.prismaService.project.findUnique({ where: { id} });
  }
}