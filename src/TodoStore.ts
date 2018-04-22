import {createStore} from "redux";
import rootReducer from "./TodoReducer";
import {StoreState} from './interfaces'
import {IAddTodoAction} from './constants/action-types'

const TodoStore = createStore(rootReducer, {});

export default TodoStore
