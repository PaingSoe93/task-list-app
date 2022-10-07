import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutListInput } from './task-create-without-list.input';

@InputType()
export class TaskCreateOrConnectWithoutListInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutListInput, {nullable:false})
    @Type(() => TaskCreateWithoutListInput)
    create!: TaskCreateWithoutListInput;
}
