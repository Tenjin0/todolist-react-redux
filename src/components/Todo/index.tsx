import * as React from "react";
import ListTodo from './List'
import AddTodo from './Add'
import { todoStore, TodoStore } from '../../stores/TodoStore'
import { iTodo } from '../../interfaces'
import { eFilter } from '../../enum'
import FilterTodo from './Filter'
import HeaderTodo from './Header'
import Api from '../../services/api'

import './todolist.scss'

const Filters = {
    [eFilter.all]: (todo: iTodo) => true,
    [eFilter.active]: (todo: iTodo) => !todo.completed,
    [eFilter.completed]: (todo: iTodo) => todo.completed
}

export interface AppProps {
    // compiler?: string, framework?: string;
}

export interface AppState {
    // todos: iTodo[],
    // newTodo: string,
    // currentFilter: eFilter
}

// interface Window {
//     store: any;
// }
// declare var window: Window;

export default class TodoList extends React.Component<AppProps,
    AppState> {

    // private store: TodoStore
    // private api: Api
    // private addStore : (title : string) => void = this .store .addTodo
    // .bind(this)

    constructor(props: AppProps) {
        super(props)
        // this.store = todoStore
        // this.state = {
        //     todos: this.store.todos,
        //     newTodo: this.store.newTodo,
        //     currentFilter: eFilter.all
        // }

        // window.store = this.state
        
        // this.api = new Api()

        // this.store.subscribe(() => {
        //     this.setState({ ...this.state, todos: this.store.todos, newTodo: this.store.newTodo })
        // })
    }

    // updateNewTodo = (e: React.FormEvent<HTMLInputElement>): void => {
    //     this.store.updateNewTodo(e.currentTarget.value as string)
    // }

    // filterCallback = (filterOption: eFilter): void => {
    //     this.setState({
    //         ...this.state,
    //         currentFilter: filterOption
    //     })
    // }

    async componentDidMount() {
        // const result = await this.api.get("todos");
        // this.store.setTodos(result)
    }

    render() {
        // const todosFiltered = this
        //     .state
        //     .todos
        //     .filter(Filters[this.state.currentFilter])
        return <div>
            {/* <HeaderTodo clearAll={this.store.clearAll} completeAll={this.store.completeAll} clearCompleted={this.store.clearCompleted} /> */}
            <AddTodo />
            <ListTodo
                // todos={todosFiltered}
                // toggleTodo={this.store.toggleTodo}
                // deleteTodo={this.store.deleteTodo} 
            />
            {/* <FilterTodo filterCallback={this.filterCallback} /> */}
        </div>
    }
}
