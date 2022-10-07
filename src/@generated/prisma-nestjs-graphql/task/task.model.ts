import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { List } from '../list/list.model';

@ObjectType()
export class Task {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:false})
    position!: number;

    @Field(() => String, {nullable:true,defaultValue:'UNASSIGNED'})
    status!: string | null;

    @Field(() => List, {nullable:false})
    list?: List;

    @Field(() => Int, {nullable:false})
    listId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
