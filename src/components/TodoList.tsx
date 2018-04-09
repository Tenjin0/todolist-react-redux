import * as React from "react";
import ListTodo from './List'
import AddTodo from './Add'
import {TodoStore} from '../TodoStore'
import {iTodo} from '../interfaces'

export interface AppProps {
    // compiler?: string, framework?: string;
}

type FilterOptions = 'all' | 'completed' | 'active'

enum Filter {
    all,
    active,
    completed
}

const  Filters = {
    [Filter.all] : (todo: iTodo) => true,
    [Filter.active] : (todo: iTodo) => !todo.completed,
    [Filter.completed]: (todo:iTodo) => todo.completed
}
export interface AppState {
    todos : iTodo[],
    newTodo : string,
    filter: Filter
}


import './todolist.scss'

interface Window {
    store : any;
}
declare var window : Window;

export default class TodoList extends React.Component < AppProps,
AppState > {

    private store : TodoStore
    // private addStore : (title : string) => void = this .store .addTodo
    // .bind(this)

    constructor(props : AppProps) {
        super(props)
        this.store = new TodoStore()
        this.state = {
            todos: this.store.todos,
            newTodo: "",
            filter: Filter.all
        }
        window.store = this.state;
    }

    updateNewTodo = (e : React.FormEvent < HTMLInputElement >) : void => {
        this.setState({newTodo: e.currentTarget.value, todos: this.state.todos})
    }

    addTodo = (title : string) : void => {
        this
            .store
            .addTodo
            .bind(this)(title)
    }

    toggleTodo = (pos : number) : void => {
        const todos = this
            .state
            .todos
            .map((todo, index) => {
                return index === pos
                    ? {
                        ...todo,
                        completed: !todo.completed
                    }
                    : todo
            })
        this.setState({ ...this.state, todos: todos})
    }

    render() {
        const todosFiltered = this.state.todos.filter(Filters[this.state.filter])
        return <div>
            <AddTodo
                newTodo={this.state.newTodo}
                updateNewTodo={this.updateNewTodo}
                addCallback={this.addTodo}/>
            <ListTodo todos={todosFiltered} toggleTodo={this.toggleTodo}/>
        </div>
    }
}
