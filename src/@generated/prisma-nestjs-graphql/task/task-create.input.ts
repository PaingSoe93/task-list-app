import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { ListCreateNestedOneWithoutTasksInput } from '../list/list-create-nested-one-without-tasks.input';

@InputType()
export class TaskCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.Length(3, 255)
    title!: string;

    @Field(() => Int, {nullable:false})
    position!: number;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => ListCreateNestedOneWithoutTasksInput, {nullable:false})
    list!: ListCreateNestedOneWithoutTasksInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
