import { Action } from 'redux';
import { iTodo } from '../interfaces'

export enum ActionTypeKeys {
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO"
}

export interface IAddTodoAction extends Action {
    type: ActionTypeKeys.ADD_TODO,
    payload: {
        title : string
    }
}

export interface IAddDeleteAction extends Action {
    type: ActionTypeKeys.DELETE_TODO,
    payload: {
        id : number
    }
}

export type TodosAction = IAddDeleteAction | IAddTodoAction

// Declare our action types using our interface. For a better debugging experience,
// I use the `@@context/ACTION_TYPE` convention for naming action types.

