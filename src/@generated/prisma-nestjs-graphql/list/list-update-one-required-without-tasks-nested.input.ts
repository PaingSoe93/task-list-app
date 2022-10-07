import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListCreateWithoutTasksInput } from './list-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ListCreateOrConnectWithoutTasksInput } from './list-create-or-connect-without-tasks.input';
import { ListUpsertWithoutTasksInput } from './list-upsert-without-tasks.input';
import { ListWhereUniqueInput } from './list-where-unique.input';
import { ListUpdateWithoutTasksInput } from './list-update-without-tasks.input';

@InputType()
export class ListUpdateOneRequiredWithoutTasksNestedInput {

    @Field(() => ListCreateWithoutTasksInput, {nullable:true})
    @Type(() => ListCreateWithoutTasksInput)
    create?: ListCreateWithoutTasksInput;

    @Field(() => ListCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => ListCreateOrConnectWithoutTasksInput)
    connectOrCreate?: ListCreateOrConnectWithoutTasksInput;

    @Field(() => ListUpsertWithoutTasksInput, {nullable:true})
    @Type(() => ListUpsertWithoutTasksInput)
    upsert?: ListUpsertWithoutTasksInput;

    @Field(() => ListWhereUniqueInput, {nullable:true})
    @Type(() => ListWhereUniqueInput)
    connect?: ListWhereUniqueInput;

    @Field(() => ListUpdateWithoutTasksInput, {nullable:true})
    @Type(() => ListUpdateWithoutTasksInput)
    update?: ListUpdateWithoutTasksInput;
}
