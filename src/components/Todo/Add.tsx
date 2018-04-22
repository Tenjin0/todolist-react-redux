import * as React from "react";
import {connect } from 'react-redux';
import {addTodo} from "../../TodoActions";
import {iTodo, StoreState} from '../../interfaces'
import {Dispatch, bindActionCreators} from "redux";
// import { } from 'reactstrap'

interface AddProps {
    addTodo : (newTodo: iTodo) => void,
}

interface AddState {
    buttonIsVisible : boolean,
    newTodo : string
}

const mapDispatchToProps = (dispatch : Dispatch) => {     return { addTodo:
(newTodo : iTodo) => (dispatch(addTodo(newTodo)))     } };

function mapStateToProps (state : StoreState) {
    console.log('mapStateToProps')
    return {}
}

class Add extends React.Component < AddProps,
AddState > {

    constructor(props : AddProps) {
        super(props)
        this.state = {
            buttonIsVisible: false,
            newTodo: ""
        }
    }

    handleSubmit = (event : React.FormEvent < EventTarget >) : void => {
        event.preventDefault()
        this
            .props
            .addTodo({ id : 1, title: "toto", completed : false})
    }

    handleFocus = (event : React.FocusEvent < HTMLInputElement >) : void => {
        this.setState({buttonIsVisible: true})
    }

    handleBlur = (event : React.FocusEvent < HTMLInputElement >) : void => {
        this.setState({buttonIsVisible: true})
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
                    autoFocus/> {this.state.buttonIsVisible && <button>Add</button>}
            </form>
        </div>
    }
}

//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Add);
