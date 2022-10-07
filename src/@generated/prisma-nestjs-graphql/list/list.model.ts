import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Task } from '../task/task.model';
import { ListCount } from './list-count.output';

@ObjectType()
export class List {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;

    @Field(() => ListCount, {nullable:false})
    _count?: ListCount;
}
