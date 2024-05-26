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