import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListWhereInput } from './list-where.input';

@InputType()
export class ListRelationFilter {

    @Field(() => ListWhereInput, {nullable:true})
    is?: ListWhereInput;

    @Field(() => ListWhereInput, {nullable:true})
    isNot?: ListWhereInput;
}
