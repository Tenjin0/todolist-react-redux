import { createStore } from "redux";
import { initialState, todoReducer } from "./TodoReducer";

const TodoStore = createStore(todoReducer);

export default TodoStore;
