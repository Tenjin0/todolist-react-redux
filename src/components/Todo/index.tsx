import * as React from "react";
import ListTodo from "./List";
import AddTodo from "./Add";
import { todoStore, TodoStore } from "../../stores/TodoStore";
import { ITodo } from "../../constants/interfaces";
import { eFilter } from "../../constants/enum";
import FilterTodo from "./Filter";
import HeaderTodo from "./Header";
import Api from "../../services/api";

import "./todolist.scss";
export default class TodoList extends React.Component<{},
    {}> {

    constructor(props: {}) {
        super(props);
    }

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
        return <div>
            {/* <HeaderTodo clearAll={this.store.clearAll} completeAll={this.store.completeAll} clearCompleted={this.store.clearCompleted} /> */}
            <AddTodo />
            <ListTodo />
            <FilterTodo />
        </div>;
    }
}
