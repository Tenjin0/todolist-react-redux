import * as React from "react";
import { } from 'reactstrap'

interface AddProps {
    newTodo: string,
    addCallback: (titre: string) => void,
    updateNewTodo: (e: React.FormEvent<HTMLInputElement>) => void
}

interface AddState {
    buttonIsVisible: boolean
}

export default class Add extends React.Component<AddProps, AddState> {

    constructor(props: AddProps) {
        super(props)
        this.state = { buttonIsVisible: false }
    }

    handleSubmit = (event: React.FormEvent<EventTarget>): void => {
        event.preventDefault()
        this.props.addCallback(this.props.newTodo)
    }

    handleFocus = (event: React.FocusEvent<HTMLInputElement>) : void => {
        this.setState({buttonIsVisible: true})
    }

    handleBlur = (event: React.FocusEvent<HTMLInputElement>) : void => {
        this.setState({buttonIsVisible: true})
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.props.updateNewTodo} onBlur={this.handleBlur} onFocus={this.handleFocus} value={this.props.newTodo} autoFocus />
                {this.state.buttonIsVisible && <button>Add</button>}
            </form>
        </div>
    }
}
