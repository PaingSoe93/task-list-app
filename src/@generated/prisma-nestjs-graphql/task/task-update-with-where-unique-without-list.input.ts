import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutListInput } from './task-update-without-list.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutListInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutListInput, {nullable:false})
    @Type(() => TaskUpdateWithoutListInput)
    data!: TaskUpdateWithoutListInput;
}
