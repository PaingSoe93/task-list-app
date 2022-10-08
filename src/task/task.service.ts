import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import {
  CreateTaskInput,
  OrderByParams,
  UpdateTaskPositionInput,
} from '../graphql';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskInput: CreateTaskInput) {
    let position = 0;
    const lastTask = await this.prisma.task.findFirst({
      where: {
        listId: createTaskInput.listId,
      },
      orderBy: {
        position: 'desc',
      },
    });
    if (lastTask) {
      position = lastTask.position + 1;
    } else {
      position = 1;
    }
    return this.prisma.task.create({
      data: { position, ...createTaskInput },
    });
  }

  findAll(orderBy?: OrderByParams) {
    const { field = 'position', direction = 'asc' } = orderBy || {};
    try {
      return this.prisma.task.findMany({ orderBy: { [field]: direction } });
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

  async updateTaskPosition(updateTaskInput: UpdateTaskPositionInput) {
    const task = await this.prisma.task.findUnique({
      where: { id: +updateTaskInput.id },
    });
    if (!task) {
      throw new BadRequestException('Task not found!');
    }
    if (updateTaskInput.position === task.position) {
      return task;
    } else if (updateTaskInput.position > task.position) {
      await this.prisma.task.updateMany({
        data: {
          position: {
            decrement: 1,
          },
        },
        where: {
          position: {
            gte: task.position,
            lte: +updateTaskInput.position,
          },
          listId: task.listId,
        },
      });
    } else {
      await this.prisma.task.updateMany({
        data: {
          position: {
            increment: 1,
          },
        },
        where: {
          position: {
            gte: +updateTaskInput.position,
            lte: task.position,
          },
          listId: task.listId,
        },
      });
    }
    return this.prisma.task.update({
      data: updateTaskInput,
      where: { id: task.id },
    });
  }
}
