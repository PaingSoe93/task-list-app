import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ListCountAggregate } from './list-count-aggregate.output';
import { ListAvgAggregate } from './list-avg-aggregate.output';
import { ListSumAggregate } from './list-sum-aggregate.output';
import { ListMinAggregate } from './list-min-aggregate.output';
import { ListMaxAggregate } from './list-max-aggregate.output';

@ObjectType()
export class AggregateList {

    @Field(() => ListCountAggregate, {nullable:true})
    _count?: ListCountAggregate;

    @Field(() => ListAvgAggregate, {nullable:true})
    _avg?: ListAvgAggregate;

    @Field(() => ListSumAggregate, {nullable:true})
    _sum?: ListSumAggregate;

    @Field(() => ListMinAggregate, {nullable:true})
    _min?: ListMinAggregate;

    @Field(() => ListMaxAggregate, {nullable:true})
    _max?: ListMaxAggregate;
}
