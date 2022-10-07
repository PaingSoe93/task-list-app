import { registerEnumType } from '@nestjs/graphql';

export enum ListScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(ListScalarFieldEnum, { name: 'ListScalarFieldEnum', description: undefined })
