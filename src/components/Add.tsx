import * as React from "react";
import {  } from 'reactstrap'


interface AddProps {
    newTodo : string,
    addCallback: (titre: string) => void,
    updateNewTodo : (e: React.FormEvent<HTMLInputElement>) => void
}

interface AddState {
}

export default class Add extends React.Component < AddProps, AddState > {

    constructor(props : AddProps) {
        super(props)
    }

    onSubmit = (event : React.FormEvent<EventTarget>) : void  => {
        event.preventDefault()
        this.props.addCallback(this.props.newTodo)       
    }
    
    render() {
        return <div>
            <form  onSubmit={this.onSubmit}>
            <input type="text" onChange={this.props.updateNewTodo} value={this.props.newTodo} autoFocus/>
            <button>Add</button>
            </form>
        </div>
    }
}
