import { Action } from 'redux';
import {iTodo} from '../interfaces'

export enum ActionTypeKeys {
    ADD_TODO = "ADD_TODO"
}

export interface IAddTodoAction extends Action {
    type : ActionTypeKeys.ADD_TODO,
    payload : iTodo
}


export type TodosAction = IAddTodoAction

// Declare our action types using our interface. For a better debugging experience,
// I use the `@@context/ACTION_TYPE` convention for naming action types.

