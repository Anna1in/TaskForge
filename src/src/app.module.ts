import { Module } from '@nestjs/common';
import { TaskController } from './TaskController';
import { TaskService } from './TaskService';
import { TaskRepository } from './TaskRepository';
import { PrismaService } from './PrismaService';
import { ProjectByIdPipe } from './ProjectByIdPipe';
import { TaskByIdPipe } from './TaskByIdPipe';
import {ProjectRepository} from "./ProjectRepository";

@Module({
  controllers: [TaskController],
  providers: [TaskService, TaskRepository, ProjectRepository, PrismaService, TaskByIdPipe, ProjectByIdPipe],
})
export class AppModule {}
