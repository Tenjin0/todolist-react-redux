import * as React from "react";
import { ITodo, IStoreState } from "../../constants/interfaces";
import ItemTodo from "./Item";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { eFilter } from "../../constants/enum";

export interface IListProps {
    todos: ITodo[];
    filter: eFilter;
}

function mapStateToProps(state: IStoreState) {
    return {
        todos: state.todos,
        filter: state.filter
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {};
}

const Filters = {
    [eFilter.all]: (todo: ITodo) => true,
    [eFilter.active]: (todo: ITodo) => !todo.completed,
    [eFilter.completed]: (todo: ITodo) => todo.completed
};

class List extends React.Component<IListProps, {}> {
    constructor(props: IListProps) {
        super(props);
    }

    render() {
        // @ts-ignore
        // const todosFiltered = this.props.todos.filter(
        //     Filters[this.props.filter]
        // );
        return (
            <div>
                <ul>
                    {
                        this.props.todos.map((todo) => (
                        <ItemTodo key={"item-" + todo.id} todo={todo} />
                    ))
                    }
                </ul>
            </div>
        );
    }
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(List);
