import {StoreState} from './interfaces'
import {Reducer} from 'redux';
import {TodosAction, IAddTodoAction, ActionTypeKeys} from './constants/action-types'

const initialState = {
    todos: [
        {
            id: 0,
            title: "welcome",
            completed: false
        }
    ]
};

const todoReducer : Reducer < StoreState > = (state : StoreState = initialState, action) => {
    console.log('reducer', action)
    switch ((action as TodosAction).type) {
        case ActionTypeKeys.ADD_TODO:
            return {
                todos: [
                    action.payload, ...state.todos
                ],
                ...state
            }
        default:
            return state;
    }

}

export default todoReducer
