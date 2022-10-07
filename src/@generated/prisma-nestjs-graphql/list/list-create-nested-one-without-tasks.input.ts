import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListCreateWithoutTasksInput } from './list-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ListCreateOrConnectWithoutTasksInput } from './list-create-or-connect-without-tasks.input';
import { ListWhereUniqueInput } from './list-where-unique.input';

@InputType()
export class ListCreateNestedOneWithoutTasksInput {

    @Field(() => ListCreateWithoutTasksInput, {nullable:true})
    @Type(() => ListCreateWithoutTasksInput)
    create?: ListCreateWithoutTasksInput;

    @Field(() => ListCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => ListCreateOrConnectWithoutTasksInput)
    connectOrCreate?: ListCreateOrConnectWithoutTasksInput;

    @Field(() => ListWhereUniqueInput, {nullable:true})
    @Type(() => ListWhereUniqueInput)
    connect?: ListWhereUniqueInput;
}
