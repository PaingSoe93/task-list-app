import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutListInput } from './task-create-without-list.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutListInput } from './task-create-or-connect-without-list.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedManyWithoutListInput {

    @Field(() => [TaskCreateWithoutListInput], {nullable:true})
    @Type(() => TaskCreateWithoutListInput)
    create?: Array<TaskCreateWithoutListInput>;

    @Field(() => [TaskCreateOrConnectWithoutListInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutListInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutListInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;
}
