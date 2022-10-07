import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TaskCreateNestedManyWithoutListInput } from '../task/task-create-nested-many-without-list.input';

@InputType()
export class ListCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.Length(3, 255)
    name!: string;

    @Field(() => TaskCreateNestedManyWithoutListInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutListInput;
}
