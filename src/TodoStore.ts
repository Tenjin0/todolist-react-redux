import {createStore} from "redux";
import {todoReducer, initialState} from "./TodoReducer";
import {StoreState} from './constants/interfaces'
import {IAddTodoAction} from './constants/action-types'

const TodoStore = createStore(todoReducer, initialState);

export default TodoStore
