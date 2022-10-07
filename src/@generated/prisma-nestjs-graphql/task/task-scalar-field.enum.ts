import { registerEnumType } from '@nestjs/graphql';

export enum TaskScalarFieldEnum {
    id = "id",
    title = "title",
    position = "position",
    status = "status",
    listId = "listId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TaskScalarFieldEnum, { name: 'TaskScalarFieldEnum', description: undefined })
