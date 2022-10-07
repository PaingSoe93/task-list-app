import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTaskInput: Prisma.TaskCreateInput) {
    return this.prisma.task.create({
      data: createTaskInput,
    });
  }

  findAll() {
    try {
      return this.prisma.task.findMany();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(taskWhereUniqueInput: Prisma.TaskWhereUniqueInput) {
    const task = await this.prisma.task.findUnique({
      where: taskWhereUniqueInput,
    });
    if (!task) {
      throw new BadRequestException('Task not found!');
    }
    return task;
  }

  update(
    taskWhereUniqueInput: Prisma.TaskWhereUniqueInput,
    updateTaskInput: Prisma.TaskUpdateInput,
  ) {
    try {
      return this.prisma.task.update({
        data: updateTaskInput,
        where: taskWhereUniqueInput,
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
