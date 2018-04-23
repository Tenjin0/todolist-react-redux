import { StoreState } from './constants/interfaces'
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
    ],
    filter : ""
};

export const todoReducer: Reducer<StoreState> = (state: StoreState = initialState, action) => {
    console.log('reducer', action.type)
    switch ((action as TodosAction).type) {
        case ActionTypeKeys.ADD_TODO:
            return {
                ...state,
                todos: [
                    {id: increment(), title: action.payload.title, completed: false}, ...state.todos
                ]
            }
        case ActionTypeKeys.DELETE_TODO:
            const newTodos = state.todos.filter(todo => todo.id !== action.payload.id)
            return {
                ...state, todos: newTodos
            }
        case ActionTypeKeys.TOGGLE_TODO:
            return { ...state, todos: state.todos.map(todo => 
                todo.id != action.payload.id ?
                todo :
                { ...todo, completed: !todo.completed }
            )}
        default:
    return state;
    }

}
