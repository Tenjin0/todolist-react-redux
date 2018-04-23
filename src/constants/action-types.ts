import { Action } from 'redux';
import { iTodo } from './interfaces'

export enum ActionTypeKeys {
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO",
    TOGGLE_TODO = "TOGGLE_TODO"
}

export interface IAddTodoAction extends Action {
    type: ActionTypeKeys.ADD_TODO,
    payload: {
        title : string
    }
}

export interface IDeleteTodoAction extends Action {
    type: ActionTypeKeys.DELETE_TODO,
    payload: {
        id : number
    }
}

export interface IToggleTodoAction extends Action {
    type: ActionTypeKeys.TOGGLE_TODO,
    payload: {
        id: number
    }
}

export type TodosAction = IDeleteTodoAction | IAddTodoAction | IToggleTodoAction

// Declare our action types using our interface. For a better debugging experience,
// I use the `@@context/ACTION_TYPE` convention for naming action types.

