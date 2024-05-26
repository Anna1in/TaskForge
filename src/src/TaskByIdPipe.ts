import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from './TaskRepository';

@Injectable()
export class TaskByIdPipe implements PipeTransform {
  constructor (
    private readonly taskRepository: TaskRepository,
  ) {}

  async transform(taskId: string) {
    const task = await this.taskRepository.findById(taskId);

    if (!task) throw new NotFoundException('Task with such id is not found');
    return taskId;
  }
}