import { ActionCreator } from "redux";
import {
    IAddTodoAction,
    IDeleteTodoAction,
    IToggleTodoAction,
    IChangeFilterAction,
    IClearAllAction,
    IClearCompleted,
    ICompleteAllAction,
    ActionTypeKeys
} from "./constants/action-types";
import { eFilter } from "./constants/enum";

export const addTodo: ActionCreator<IAddTodoAction> = (title: string) => ({
    type: ActionTypeKeys.ADD_TODO,
    payload: { title }
});

export const deleteTodo: ActionCreator<IDeleteTodoAction> = (id: number) => ({
    type: ActionTypeKeys.DELETE_TODO,
    payload: {
        id
    }
});

export const toggleTodo: ActionCreator<IToggleTodoAction> = (id: number) => ({
    type: ActionTypeKeys.TOGGLE_TODO,
    payload: {
        id
    }
});

export const changeFilter: ActionCreator<IChangeFilterAction> = (
    filter: eFilter
) => ({
    type: ActionTypeKeys.CHANGE_FILTER,
    payload: {
        filter
    }
});

export const completeAll: ActionCreator<ICompleteAllAction> = () => ({
    type: ActionTypeKeys.COMPLETE_ALL

});

export const ClearAll: ActionCreator<IClearAllAction> = () => ({
    type: ActionTypeKeys.CLEAR_ALL

});

export const clearCompleted: ActionCreator<IClearCompleted> = () => ({
    type: ActionTypeKeys.CLEAR_COMPLETED

});
// export const addTodo = (newTodo : iTodo) : IAddTodoAction => ({type: ActionTypeKeys.ADD_TODO, payload: newTodo})
