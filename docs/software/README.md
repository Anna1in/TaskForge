# Реалізація інформаційного та програмного забезпечення

В рамках проєкту розробляється:
## SQL-скрипт для створення на початкового наповнення бази даних

```sql
-- CreateEnum
CREATE TYPE "task_status" AS ENUM ('completed', 'in_progress');

CREATE TYPE "project_status" AS ENUM ('completed', 'in_progress');

CREATE TYPE "developer_status" AS ENUM ('online', 'offline');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "email" VARCHAR(40) NOT NULL,
    "password" VARCHAR(50),
    "fullname" VARCHAR(40),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "status" "task_status" NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "price" VARCHAR(50) NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project"(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "status" "project_status" NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "developers" (
    "user_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "status" "developer_status" NOT NULL
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "members" (
    "id" SERIAL NOT NULL,
    "roles_id" INTEGER NOT NULL,
    "users_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_login_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "project_name_key" ON "project"("name");

-- CreateIndex
CREATE UNIQUE INDEX "developers_name_key" ON "developers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "developers_user_id_task_id_key" ON "developers"("user_id", "task_id");

-- CreateIndex
CREATE UNIQUE INDEX "members_roles_id_users_id_project_id_key" ON "members"("roles_id", "users_id", "project_id");


-- AddForeignKey
ALTER TABLE "developers" ADD CONSTRAINT "developers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "developers" ADD CONSTRAINT "developers_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_task_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_roles_id_fkey" FOREIGN KEY ("roles_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
```

## RESTfull система управління проектами

### Схема бази даних (ORM Prisma)

```
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id         String      @id @default(uuid())
  username   String      @unique
  email      String      @unique
  password   String
  fullNmae   String      @map("full_name")
  members    Member[]
  developers Developer[]

  @@map("users")
}

enum Status {
  COMPLETED
  IN_PROGRESS
}

model Project {
  id      String   @id @default(uuid())
  name    String
  status  Status
  members Member[]
  tasks   Task[]

  @@map("projects")
}

model Member {
  id        String  @id @default(uuid())
  user      User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId    String  @map("user_id")
  project   Project @relation(fields: [projectId], references: [id], onDelete: Cascade)
  projectId String  @map("project_id")
  role      Role?

  @@map("members")
}

model Role {
  id       String @id @default(uuid())
  name     String
  member   Member @relation(fields: [memberId], references: [id], onDelete: Cascade)
  memberId String @unique @map("member)id")

  @@map("roles")
}

model Task {
  id          String      @id @default(uuid())
  name        String
  description String
  status      Status
  price       String
  project     Project     @relation(fields: [projectId], references: [id], onDelete: Cascade)
  projectId   String      @map("project_id")
  developers  Developer[]

  @@map("tasks")
}

enum DeveloperStatus {
  ONLINE
  OFFLINE
}

model Developer {
  id     String          @id @default(uuid())
  name   String
  status DeveloperStatus
  user   User            @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId String          @map("user_id")
  task   Task            @relation(fields: [taskId], references: [id], onDelete: Cascade)
  taskId String          @map("task_id")

  @@map("developrs")
}
```

### Модуль та сервіс підключення до бази даних

```ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
```

### Модуль та контролер для отримання запитів

```ts
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

```

```ts
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
```

### Сервіс та репозиторії для взаємодії з базою даних

```ts
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
```

```ts
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
```

```ts
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
```

### DTO для створення таски

```ts
import {IsEnum, IsNotEmpty, IsString, IsUUID} from 'class-validator';
import { Status } from '@prisma/client';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  projectId: string;
}
```

### DTO для оновлення таски

```ts
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Status } from '@prisma/client';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsEnum(Status)
  status: Status;

  @IsOptional()
  @IsString()
  price: string;
}
```

### Pipes для валідації даних і обробки помилок клієнта

```ts
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
```

```ts
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
```

### Головний модуль програми

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
```
