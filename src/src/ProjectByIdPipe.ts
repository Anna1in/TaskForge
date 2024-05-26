import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './CreateTaskDto';
import { ProjectRepository } from './ProjectRepository';

@Injectable()
export class ProjectByIdPipe implements PipeTransform {
  constructor (
    private readonly projectRepository: ProjectRepository,
  ) {}

  async transform(body: CreateTaskDto) {
    const project = await this.projectRepository.findById(body.projectId);

    if (!project) throw new NotFoundException('Project with such id is not found');
    return body;
  }
}