import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutListInput } from './task-update-without-list.input';
import { TaskCreateWithoutListInput } from './task-create-without-list.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutListInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutListInput, {nullable:false})
    @Type(() => TaskUpdateWithoutListInput)
    update!: TaskUpdateWithoutListInput;

    @Field(() => TaskCreateWithoutListInput, {nullable:false})
    @Type(() => TaskCreateWithoutListInput)
    create!: TaskCreateWithoutListInput;
}
