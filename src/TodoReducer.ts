import { StoreState } from './interfaces'
import { Reducer } from 'redux';
import { TodosAction, IAddTodoAction, ActionTypeKeys } from './constants/action-types'

let i = 0;
function increment(): number {
    return i++
}
export const initialState = {
    todos: [
        {
            id: increment(),
            title: "welcome",
            completed: false
        }
    ]
};

export const todoReducer: Reducer<StoreState> = (state: StoreState = initialState, action) => {
    switch ((action as TodosAction).type) {
        case ActionTypeKeys.ADD_TODO:
            console.log(action)
            const newState = {
                ...state,
                todos: [
                    {id: increment(), title: action.payload.title, completed: false}, ...state.todos
                ]
            }
            return newState
        case ActionTypeKeys.DELETE_TODO:
            const newTodos = state.todos.filter(todo => todo.id !== action.payload.id)
            return {
                ...state, todos: newTodos
            }
        default:
    return state;
    }

}
