import * as React from "react";
// import {List} from "../List"; import {AddToList} from "../AddToList"

export interface AppProps {
    compiler?: string,
    framework?: string;
}
export interface AppState {
    todos : string[]
}

import './todolist.css'

// 'AppProps' describes the shape of props. State is never set so we use the
// '{}' type.
export class TodoList extends React.Component < AppProps,
AppState > {

    constructor(props : AppProps) {
        super(props)
        this.state = {
            todos: ["number 1", "number 2"]
        }
        this.onHandleChange = this
            .onHandleChange
            .bind(this);
        this.clickCallback = this
            .clickCallback
            .bind(this);

    }
    onHandleChange(): void {
        console.log("toto")
    }
    clickCallback(newTodo : string): void {
        this.setState({
            todos: [
                ...this.state.todos,
                newTodo
            ]
        })
    }

    render() {
        const list = this.state.todos;
        return(
            <section className="todoapp">
                <div data-reactid=".0">
                    <header className="header" data-reactid=".0.0">
                        <h1 data-reactid=".0.0.0">todos</h1>
                        <input
                            className="new-todo"
                            placeholder="What needs to be done?"
                            value=""
                            data-reactid=".0.0.1"/></header>
                    <section className="main" data-reactid=".0.1">
                        <input className="toggle-all" type="checkbox"/>
                        <ul className="todo-list" data-reactid=".0.1.1">
                            <li
                                className="completed"
                                data-reactid=".0.1.1.$65f69f85-2e8e-4c43-b89d-47c4a46a3e1f">
                                <div
                                    className="view"
                                    data-reactid=".0.1.1.$65f69f85-2e8e-4c43-b89d-47c4a46a3e1f.0">
                                    <input className="toggle" type="checkbox"/>
                                    <label data-reactid=".0.1.1.$65f69f85-2e8e-4c43-b89d-47c4a46a3e1f.0.1">qsd</label>
                                    <button
                                        className="destroy"
                                        data-reactid=".0.1.1.$65f69f85-2e8e-4c43-b89d-47c4a46a3e1f.0.2"></button>
                                </div>
                                <input
                                    className="edit"
                                    value="qsd"
                                    data-reactid=".0.1.1.$65f69f85-2e8e-4c43-b89d-47c4a46a3e1f.1"/></li>
                        </ul>
                    </section>
                    <footer className="footer" data-reactid=".0.2">
                        <span className="todo-count" data-reactid=".0.2.0">
                            <strong data-reactid=".0.2.0.0">0</strong>
                            <span data-reactid=".0.2.0.1"></span>
                            <span data-reactid=".0.2.0.2">items</span>
                            <span data-reactid=".0.2.0.3">
                                left</span>
                        </span>
                        <ul className="filters" data-reactid=".0.2.1">
                            <li data-reactid=".0.2.1.0">
                                <a href="#/" className="selected" data-reactid=".0.2.1.0.0">All</a>
                            </li>
                            <span data-reactid=".0.2.1.1"></span>
                            <li data-reactid=".0.2.1.2">
                                <a href="#/active" className="" data-reactid=".0.2.1.2.0">Active</a>
                            </li>
                            <span data-reactid=".0.2.1.3"></span>
                            <li data-reactid=".0.2.1.4">
                                <a href="#/completed" className="" data-reactid=".0.2.1.4.0">Completed</a>
                            </li>
                        </ul>
                        <button className="clear-completed" data-reactid=".0.2.2">Clear completed</button>
                    </footer>
                </div>
            </section>
        )}
}
