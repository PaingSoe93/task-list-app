import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TaskUpdateManyWithoutListNestedInput } from '../task/task-update-many-without-list-nested.input';

@InputType()
export class ListUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => TaskUpdateManyWithoutListNestedInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutListNestedInput;
}
