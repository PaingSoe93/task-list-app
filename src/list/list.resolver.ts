import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ListCreateInput } from '../@generated/prisma-nestjs-graphql/list/list-create.input';
import { ListUncheckedUpdateInput } from '../@generated/prisma-nestjs-graphql/list/list-unchecked-update.input';
import { ListWhereUniqueInput } from '../@generated/prisma-nestjs-graphql/list/list-where-unique.input';
import { ListService } from './list.service';

@Resolver('List')
export class ListResolver {
  constructor(private readonly listService: ListService) {}

  @Mutation('createList')
  create(@Args('createListInput') createListInput: ListCreateInput) {
    return this.listService.create(createListInput);
  }

  @Query('lists')
  findAll() {
    return this.listService.findAll();
  }

  @Query('list')
  findOne(@Args('id') id: ListWhereUniqueInput) {
    return this.listService.findOne(id);
  }

  @Mutation('updateList')
  update(@Args('updateListInput') updateListInput: ListUncheckedUpdateInput) {
    return this.listService.update(
      { id: +updateListInput.id },
      updateListInput,
    );
  }
}
