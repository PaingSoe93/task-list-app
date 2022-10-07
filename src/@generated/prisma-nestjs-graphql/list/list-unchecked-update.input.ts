import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TaskUncheckedUpdateManyWithoutListNestedInput } from '../task/task-unchecked-update-many-without-list-nested.input';

@InputType()
export class ListUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => TaskUncheckedUpdateManyWithoutListNestedInput, {nullable:true})
    tasks?: TaskUncheckedUpdateManyWithoutListNestedInput;
}
