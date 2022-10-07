import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { ListCreateInput } from '../@generated/prisma-nestjs-graphql/list/list-create.input';

@Injectable()
export class ListService {
  constructor(private readonly prisma: PrismaService) {}
  create(createListInput: Prisma.ListCreateInput) {
    return this.prisma.list.create({
      data: createListInput,
    });
  }

  findAll() {
    try {
      return this.prisma.list.findMany({
        include: {
          tasks: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  findOne(listWhereUniqueInput: Prisma.ListWhereUniqueInput) {
    let list = this.prisma.list.findUnique({
      where: listWhereUniqueInput,
    });
    if (!list) {
      throw new BadRequestException('List not found!');
    }
    return list;
  }

  update(
    listWhereUniqueInput: Prisma.ListWhereUniqueInput,
    updateListInput: Prisma.ListUpdateInput,
  ) {
    try {
      return this.prisma.list.update({
        data: updateListInput,
        where: listWhereUniqueInput,
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
