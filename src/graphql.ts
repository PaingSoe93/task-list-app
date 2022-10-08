
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum TaskStatus {
    UNASSIGNED = "UNASSIGNED",
    ASSIGNED = "ASSIGNED",
    INPROGRESS = "INPROGRESS",
    DONE = "DONE"
}

export class CreateListInput {
    name: string;
}

export class UpdateListInput {
    id: number;
    name?: Nullable<string>;
}

export class CreateTaskInput {
    title: string;
    status?: Nullable<TaskStatus>;
    listId: number;
}

export class UpdateTaskInput {
    id: number;
    title?: Nullable<string>;
    status?: Nullable<TaskStatus>;
}

export class UpdateTaskPositionInput {
    id: number;
    position: number;
}

export class OrderByParams {
    field: string;
    direction: string;
}

export class List {
    id: number;
    name: string;
    tasks: Task[];
}

export abstract class IQuery {
    abstract lists(): Nullable<List>[] | Promise<Nullable<List>[]>;

    abstract list(id: number): Nullable<List> | Promise<Nullable<List>>;

    abstract tasks(orderBy?: Nullable<OrderByParams>): Nullable<Task>[] | Promise<Nullable<Task>[]>;

    abstract task(id: number): Nullable<Task> | Promise<Nullable<Task>>;
}

export abstract class IMutation {
    abstract createList(createListInput: CreateListInput): List | Promise<List>;

    abstract updateList(updateListInput: UpdateListInput): List | Promise<List>;

    abstract createTask(createTaskInput: CreateTaskInput): Task | Promise<Task>;

    abstract updateTask(updateTaskInput: UpdateTaskInput): Task | Promise<Task>;

    abstract updateTaskPosition(updateTaskPositionInput: UpdateTaskPositionInput): Task | Promise<Task>;
}

export class Task {
    id: string;
    title: string;
    position?: Nullable<number>;
    status: TaskStatus;
    listId: number;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export type DateTime = any;
type Nullable<T> = T | null;
