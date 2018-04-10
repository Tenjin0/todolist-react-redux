import * as React from "react";
import ListTodo from './List'
import AddTodo from './Add'
import {TodoStore} from '../../TodoStore'
import {iTodo} from '../../interfaces'
import {eFilter} from '../../enum'
import FilterTodo from './Filter'

import './todolist.scss'

const  Filters = {
    [eFilter.all] : (todo: iTodo) => true,
    [eFilter.active] : (todo: iTodo) => !todo.completed,
    [eFilter.completed]: (todo:iTodo) => todo.completed
}

export interface AppProps {
    // compiler?: string, framework?: string;
}

export interface AppState {
    todos : iTodo[],
    newTodo : string,
    currentFilter: eFilter
}

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
            currentFilter: eFilter.all
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

    toggleTodo = (id : number) : void => {

        // As setState in asynchonous perhaps it is not a good idea to save a property state in a variable.
        const todos = this
            .state
            .todos
            .map((todo) => {
                return  todo.id === id
                    ? {
                        ...todo,
                        completed: !todo.completed
                    }
                    : todo
            })
        this.setState({ ...this.state, todos: todos})
    }

    filterCallback = (filterOption: eFilter) : void => {
        this.setState((previousState) => {
            return {...previousState, currentFilter: filterOption}
        })
        this.setState({...this.state, currentFilter: filterOption})
    }
    render() {
        const todosFiltered = this.state.todos.filter(Filters[this.state.currentFilter])
        return <div>
            <AddTodo
                newTodo={this.state.newTodo}
                updateNewTodo={this.updateNewTodo}
                addCallback={this.addTodo}/>
            <ListTodo todos={todosFiltered} toggleTodo={this.toggleTodo}/>
            <FilterTodo filterCallback={this.filterCallback}/>
        </div>
    }
}
