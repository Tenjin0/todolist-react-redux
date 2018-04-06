import * as React from "react";
import { List } from "../List";
import {AddToList} from "../AddToList"


export interface AppProps { compiler?: string, framework?: string; }
export interface AppState { todos: Array<string> }
// 'AppProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<AppProps, AppState> {


    constructor(props: AppProps) {
        super(props)
        this.state = {
            todos: [
                "number 1",
                "number 2"
            ]
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onRetrievedInput = this.onRetrievedInput.bind(this);

    }
    onHandleChange(): void {
        console.log("toto")
    }
    onRetrievedInput(): void {

    }
    render() {
        const list = this.state.todos;
        return (
            <div>
                <AddToList />
                <List list= {list} onChange={this.onHandleChange}/> 
            </div>
        )
    }
}