import * as React from 'react';
import { Form, Button, FormControl, FormControlProps } from 'react-bootstrap';


export interface AddToListProps { }
export interface AddToListState { input: string }
export class AddToList extends React.Component<AddToListProps, AddToListState> {

    constructor(props: AddToListProps) {
        super(props);
        this.state = {
            input : ""
        }
        this.onHandleClick = this.onHandleClick.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }
    
    onHandleClick() : void{
        
    }
    
    onChangeInput(event : React.FormEvent<FormControlProps>) : void {
        this.setState({input: event.currentTarget.value.toString()})
    }

    render() {
        return (
            <div>
                <Form inline={true} value={this.state.input} >
                    <FormControl id="new-todo" className='mr-2' onChange= {this.onChangeInput} value={this.state.input}/>
                    <Button onClick={this.onHandleClick} >OK</Button>
                </Form>
            </div>
        )
    }
} 