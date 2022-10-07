import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutListInput } from './task-create-without-list.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutListInput } from './task-create-or-connect-without-list.input';
import { TaskUpsertWithWhereUniqueWithoutListInput } from './task-upsert-with-where-unique-without-list.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutListInput } from './task-update-with-where-unique-without-list.input';
import { TaskUpdateManyWithWhereWithoutListInput } from './task-update-many-with-where-without-list.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUncheckedUpdateManyWithoutListNestedInput {

    @Field(() => [TaskCreateWithoutListInput], {nullable:true})
    @Type(() => TaskCreateWithoutListInput)
    create?: Array<TaskCreateWithoutListInput>;

    @Field(() => [TaskCreateOrConnectWithoutListInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutListInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutListInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutListInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutListInput)
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutListInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    set?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    disconnect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    delete?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskUpdateWithWhereUniqueWithoutListInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutListInput)
    update?: Array<TaskUpdateWithWhereUniqueWithoutListInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutListInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutListInput)
    updateMany?: Array<TaskUpdateManyWithWhereWithoutListInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    deleteMany?: Array<TaskScalarWhereInput>;
}
