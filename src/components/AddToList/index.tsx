import * as React from 'react';
// import {Form, Button, FormControl, FormControlProps} from 'react-bootstrap';

export interface AddToListProps {
    clickCallback: Function
}
export interface AddToListState {
    input : string
}
export class AddToList extends React.Component < AddToListProps,
AddToListState > {

    constructor(props : AddToListProps) {
        super(props);
        this.state = {
            input: ""
        }
        this.onHandleClick = this
            .onHandleClick
            .bind(this);
        this.onChangeInput = this
            .onChangeInput
            .bind(this);
    }

    onHandleClick() : void {
        this.props.clickCallback(this.state.input)
        
    }

    onChangeInput(event : React.FormEvent < HTMLInputElement >) : void {
        this.setState({
            input: event
                .currentTarget
                .value
                .toString()
        })
    }

    render() {
        return (
            <div>
                <form className="form-inline">
                    <input
                        id="new-todo"
                        className='mr-2 form-control'
                        onChange={this.onChangeInput}
                        defaultValue={this.state.input}/>
                    {/* <Button onClick={this.onHandleClick}>OK</Button> */}
                </form>
            </div>
        )
    }
}
