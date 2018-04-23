import * as React from "react";
import { connect } from 'react-redux';
import { addTodo } from "../../TodoActions";
import { iTodo, StoreState } from '../../interfaces'
import { Dispatch, bindActionCreators } from "redux";
// import { } from 'reactstrap'

interface AddProps {
    addTodo: (newTitle: string) => void,
}

interface AddState {
    buttonIsVisible: boolean,
    newTodo: string
}

//@ts-ignore
const mapDispatchToProps = (dispatch: Dispatch, ownProps) => {
    return {
        addTodo:
            (newTodo: iTodo) => (dispatch(addTodo(newTodo))),
        todo: ownProps.todo
    }
};

// function mapStateToProps(state: StoreState) {
//     return {}
// }

class Add extends React.Component<AddProps,
    AddState> {

    constructor(props: AddProps) {
        super(props)
        this.state = {
            buttonIsVisible: false,
            newTodo: ""
        }
    }

    handleSubmit = (event: React.FormEvent<EventTarget>): void => {
        event.preventDefault()
        this
            .props
            .addTodo(this.state.newTodo);
    }

    handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
        this.setState({ buttonIsVisible: true })
    }

    handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
        this.setState({ buttonIsVisible: true })
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ ...this.state, newTodo: event.currentTarget.value as string})
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                    autoFocus /> {this.state.buttonIsVisible && <button>Add</button>}
            </form>
        </div>
    }
}

//@ts-ignore
export default connect(null, mapDispatchToProps)(Add);
