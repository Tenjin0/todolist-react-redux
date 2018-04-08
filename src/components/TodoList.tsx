import * as React from "react";
import ListTodo from './List'
import AddTodo from './Add'
import {TodoStore} from '../TodoStore'
import {iTodo} from '../interfaces'

export interface AppProps {
    // compiler?: string, framework?: string;
}
export interface AppState {
    todos : iTodo[],
    newTodo : string
}

import './todolist.css'

interface Window {
    store : any;
}
declare var window : Window;

export default class TodoList extends React.Component < AppProps,
AppState > {

    private store : TodoStore = new TodoStore()
    // private addStore : (title : string) => void = this .store .addTodo
    // .bind(this)

    constructor(props : AppProps) {
        super(props)
        this.state = {
            todos: [],
            newTodo: ""
        };
        // window.store = this.;
    }

    updateNewTodo = (e : React.FormEvent < HTMLInputElement >) : void => {
        this.setState({newTodo: e.currentTarget.value, todos: this.state.todos})
    }

    addTodo = (title : string) : void => {
        this
            .state
            .todos
            .push({id: 0, title: title, completed: false})
        console.log(this.state)
    }

    render() {
        return <div>
            <AddTodo
                newTodo={this.state.newTodo}
                updateNewTodo={this.updateNewTodo}
                addCallback={this.addTodo}/>
            <ListTodo todos={this.state.todos}/>
        </div>
    }
}
