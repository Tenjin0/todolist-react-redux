import {iTodo} from './interfaces'
import {IAddTodoAction, ActionTypeKeys} from './constants/action-types'
import { ActionCreator } from 'redux';



export const addTodo: ActionCreator<IAddTodoAction> = (newTodo: iTodo) => ({
  type: ActionTypeKeys.ADD_TODO,
  payload: newTodo
});

// export const addTodo = (newTodo : iTodo) : IAddTodoAction => ({type: ActionTypeKeys.ADD_TODO, payload: newTodo})
