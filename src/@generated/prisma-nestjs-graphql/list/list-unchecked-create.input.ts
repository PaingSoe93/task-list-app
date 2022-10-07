import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TaskUncheckedCreateNestedManyWithoutListInput } from '../task/task-unchecked-create-nested-many-without-list.input';

@InputType()
export class ListUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.Length(3, 255)
    name!: string;

    @Field(() => TaskUncheckedCreateNestedManyWithoutListInput, {nullable:true})
    tasks?: TaskUncheckedCreateNestedManyWithoutListInput;
}
