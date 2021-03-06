import { Action } from "redux";
import { ITodo } from "./interfaces";
import { eFilter } from "./enum";

export enum ActionTypeKeys {
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    CHANGE_FILTER = "CHANGE_FILTER",
    COMPLETE_ALL = "COMPLETE_ALL",
    CLEAR_ALL = "CLEAR_ALL",
    CLEAR_COMPLETED = "CLEAR_COMPLETED"
}

export interface IAddTodoAction extends Action {
    type: ActionTypeKeys.ADD_TODO;
    payload: {
        title: string;
    };
}

export interface IDeleteTodoAction extends Action {
    type: ActionTypeKeys.DELETE_TODO;
    payload: {
        id: number;
    };
}

export interface IToggleTodoAction extends Action {
    type: ActionTypeKeys.TOGGLE_TODO;
    payload: {
        id: number;
    };
}

export interface IChangeFilterAction extends Action {
    type: ActionTypeKeys.CHANGE_FILTER;
    payload: {
        filter: eFilter;
    };
}

export interface ICompleteAllAction extends Action {
    type: ActionTypeKeys.COMPLETE_ALL;
}

export interface IClearAllAction extends Action {
    type: ActionTypeKeys.CLEAR_ALL;
}

export interface IClearCompleted extends Action {
    type: ActionTypeKeys.CLEAR_COMPLETED;
}

export type TodosAction =
    | IDeleteTodoAction
    | IAddTodoAction
    | IToggleTodoAction
    | IChangeFilterAction
    | ICompleteAllAction
    | IClearAllAction
    | IClearCompleted;

// Declare our action types using our interface. For a better debugging experience,
// I use the `@@context/ACTION_TYPE` convention for naming action types.
