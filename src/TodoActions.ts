import {iTodo} from './interfaces'
import {IAddTodoAction, IAddDeleteAction, ActionTypeKeys} from './constants/action-types'
import { ActionCreator } from 'redux';

export const addTodo: ActionCreator<IAddTodoAction> = (title: string) => ({
  type: ActionTypeKeys.ADD_TODO,
  payload: { title : title}
});

export const deleteTodo: ActionCreator<IAddDeleteAction> = (id : number) => ({
  type: ActionTypeKeys.DELETE_TODO,
  payload: {
    id
  }
});

// export const addTodo = (newTodo : iTodo) : IAddTodoAction => ({type: ActionTypeKeys.ADD_TODO, payload: newTodo})
