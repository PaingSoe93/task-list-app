import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListWhereInput } from './list-where.input';
import { Type } from 'class-transformer';
import { ListOrderByWithAggregationInput } from './list-order-by-with-aggregation.input';
import { ListScalarFieldEnum } from './list-scalar-field.enum';
import { ListScalarWhereWithAggregatesInput } from './list-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ListCountAggregateInput } from './list-count-aggregate.input';
import { ListAvgAggregateInput } from './list-avg-aggregate.input';
import { ListSumAggregateInput } from './list-sum-aggregate.input';
import { ListMinAggregateInput } from './list-min-aggregate.input';
import { ListMaxAggregateInput } from './list-max-aggregate.input';

@ArgsType()
export class ListGroupByArgs {

    @Field(() => ListWhereInput, {nullable:true})
    @Type(() => ListWhereInput)
    where?: ListWhereInput;

    @Field(() => [ListOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ListOrderByWithAggregationInput>;

    @Field(() => [ListScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ListScalarFieldEnum>;

    @Field(() => ListScalarWhereWithAggregatesInput, {nullable:true})
    having?: ListScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ListCountAggregateInput, {nullable:true})
    _count?: ListCountAggregateInput;

    @Field(() => ListAvgAggregateInput, {nullable:true})
    _avg?: ListAvgAggregateInput;

    @Field(() => ListSumAggregateInput, {nullable:true})
    _sum?: ListSumAggregateInput;

    @Field(() => ListMinAggregateInput, {nullable:true})
    _min?: ListMinAggregateInput;

    @Field(() => ListMaxAggregateInput, {nullable:true})
    _max?: ListMaxAggregateInput;
}
