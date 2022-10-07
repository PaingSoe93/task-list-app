import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskCreateInput } from '../@generated/prisma-nestjs-graphql/task/task-create.input';
import { TaskUncheckedUpdateInput } from '../@generated/prisma-nestjs-graphql/task/task-unchecked-update.input';
import { TaskWhereUniqueInput } from '../@generated/prisma-nestjs-graphql/task/task-where-unique.input';
import { TaskService } from './task.service';

@Resolver('Task')
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Mutation('createTask')
  create(@Args('createTaskInput') createTaskInput: TaskCreateInput) {
    return this.taskService.create(createTaskInput);
  }

  @Query('tasks')
  findAll() {
    return this.taskService.findAll();
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
}