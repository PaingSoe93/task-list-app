import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListWhereUniqueInput } from './list-where-unique.input';
import { Type } from 'class-transformer';
import { ListCreateWithoutTasksInput } from './list-create-without-tasks.input';

@InputType()
export class ListCreateOrConnectWithoutTasksInput {

    @Field(() => ListWhereUniqueInput, {nullable:false})
    @Type(() => ListWhereUniqueInput)
    where!: ListWhereUniqueInput;

    @Field(() => ListCreateWithoutTasksInput, {nullable:false})
    @Type(() => ListCreateWithoutTasksInput)
    create!: ListCreateWithoutTasksInput;
}
