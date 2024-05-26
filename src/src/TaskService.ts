import { Injectable } from '@nestjs/common';
import { TaskRepository } from './TaskRepository';
import { CreateTaskDto } from './CreateTaskDto';
import { UpdateTaskDto } from './UpdateTaskDto';

@Injectable()
export class TaskService {
  constructor (
    private readonly taskRepository: TaskRepository,
  ) {}

  create (body: CreateTaskDto) {
    return this.taskRepository.create(body);
  }

  getAll () {
    return this.taskRepository.findMany({});
  }

  getById (taskId: string) {
    return this.taskRepository.findById(taskId);
  }

  update (taskId: string, body: UpdateTaskDto) {
    return this.taskRepository.updateById(taskId, body);
  }

  delete (taskId: string) {
    return this.taskRepository.deleteById(taskId);
  }
}