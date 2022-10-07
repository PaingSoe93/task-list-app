import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListUpdateInput } from './list-update.input';
import { Type } from 'class-transformer';
import { ListWhereUniqueInput } from './list-where-unique.input';

@ArgsType()
export class UpdateOneListArgs {

    @Field(() => ListUpdateInput, {nullable:false})
    @Type(() => ListUpdateInput)
    data!: ListUpdateInput;

    @Field(() => ListWhereUniqueInput, {nullable:false})
    @Type(() => ListWhereUniqueInput)
    where!: ListWhereUniqueInput;
}
