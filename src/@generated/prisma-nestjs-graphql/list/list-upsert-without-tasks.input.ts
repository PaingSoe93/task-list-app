import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListUpdateWithoutTasksInput } from './list-update-without-tasks.input';
import { Type } from 'class-transformer';
import { ListCreateWithoutTasksInput } from './list-create-without-tasks.input';

@InputType()
export class ListUpsertWithoutTasksInput {

    @Field(() => ListUpdateWithoutTasksInput, {nullable:false})
    @Type(() => ListUpdateWithoutTasksInput)
    update!: ListUpdateWithoutTasksInput;

    @Field(() => ListCreateWithoutTasksInput, {nullable:false})
    @Type(() => ListCreateWithoutTasksInput)
    create!: ListCreateWithoutTasksInput;
}
