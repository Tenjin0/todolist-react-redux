import * as React from "react";
import { ITodo, IStoreState } from "../../constants/interfaces";
import ItemTodo from "./Item";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

export interface IListProps {
  todos: ITodo[];
}

function mapStateToProps(state: IStoreState) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

class List extends React.Component<IListProps, {}> {
  constructor(props: IListProps) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <ItemTodo key={"item-" + todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(List);
