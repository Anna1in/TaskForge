import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './TaskService';
import { CreateTaskDto } from './CreateTaskDto';
import { ProjectByIdPipe } from './ProjectByIdPipe';
import { UpdateTaskDto } from './UpdateTaskDto';
import {TaskByIdPipe} from "./TaskByIdPipe";

@Controller('/tasks')
export class TaskController {
  constructor (
    private readonly taskService: TaskService,
  ) {}

  @Post()
  create (
    @Body(ProjectByIdPipe) body: CreateTaskDto,
  ) {
    return this.taskService.create(body);
  }

  @Get()
  getAll () {
    return this.taskService.getAll();
  }

  @Get('/:taskId')
  getById (
    @Param('taskId', TaskByIdPipe) taskId: string,
  ) {
    return this.taskService.getById(taskId);
  }

  @Patch('/:taskId')
  update (
    @Param('taskId', TaskByIdPipe) taskId: string,
    @Body() body: UpdateTaskDto,
  ) {
    return this.taskService.update(taskId, body);
  }

  @Delete('/:taskId')
  delete (
    @Param('taskId', TaskByIdPipe) taskId: string,
  ) {
    return this.taskService.delete(taskId);
  }
}