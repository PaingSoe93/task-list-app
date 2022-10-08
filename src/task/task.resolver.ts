import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskUncheckedUpdateInput } from '../@generated/prisma-nestjs-graphql/task/task-unchecked-update.input';
import { TaskWhereUniqueInput } from '../@generated/prisma-nestjs-graphql/task/task-where-unique.input';
import {
  CreateTaskInput,
  OrderByParams,
  UpdateTaskPositionInput,
} from '../graphql';
import { TaskService } from './task.service';

@Resolver('Task')
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Mutation('createTask')
  create(@Args('createTaskInput') createTaskInput: CreateTaskInput) {
    return this.taskService.create(createTaskInput);
  }

  @Query('tasks')
  findAll(@Args('orderBy') orderBy?: OrderByParams) {
    return this.taskService.findAll(orderBy);
  }

  @Query('task')
  findOne(@Args('id') taskWhereUniqueInput: TaskWhereUniqueInput) {
    return this.taskService.findOne(taskWhereUniqueInput);
  }

  @Mutation('updateTask')
  update(@Args('updateTaskInput') updateTaskInput: TaskUncheckedUpdateInput) {
    return this.taskService.update(
      { id: +updateTaskInput.id },
      updateTaskInput,
    );
  }

  @Mutation('updateTaskPosition')
  updateTaskPosition(
    @Args('updateTaskPositionInput')
    updateTaskPosistionInput: UpdateTaskPositionInput,
  ) {
    return this.taskService.updateTaskPosition(updateTaskPosistionInput);
  }
}
