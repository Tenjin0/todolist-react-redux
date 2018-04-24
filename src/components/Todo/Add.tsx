import * as React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../TodoActions";
import { ITodo, IStoreState } from "../../constants/interfaces";
import { Dispatch, bindActionCreators } from "redux";
// import { } from 'reactstrap'

interface IAddProps {
    addTodo: (newTitle: string) => void;
}

interface IAddState {
    buttonIsVisible: boolean;
    newTodo: string;
}

// @ts-ignore
const mapDispatchToProps = (dispatch: Dispatch, ownProps) => {
    return {
        addTodo: (newTodo: ITodo) => dispatch(addTodo(newTodo)),
        todo: ownProps.todo
    };
};

// function mapStateToProps(state: StoreState) {
//     return {}
// }

class Add extends React.Component<IAddProps, IAddState> {
    constructor(props: IAddProps) {
        super(props);
        this.state = {
            buttonIsVisible: false,
            newTodo: ""
        };
    }

    handleSubmit = (event: React.FormEvent<EventTarget>): void => {
        event.preventDefault();
        this.props.addTodo(this.state.newTodo);
    }

    handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
        this.setState({ buttonIsVisible: true });
    }

    handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
        this.setState({ buttonIsVisible: true });
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            ...this.state,
            newTodo: event.currentTarget.value as string
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onBlur={this.handleBlur}
                        onFocus={this.handleFocus}
                        onChange={this.handleChange}
                        autoFocus
                    />{" "}
                    {this.state.buttonIsVisible && <button>Add</button>}
                </form>
            </div>
        );
    }
}

// @ts-ignore
export default connect(null, mapDispatchToProps)(Add);
