import * as React from 'react'
import {iTodo} from '../../interfaces'

export interface ItemProps {
    todo : iTodo,
    // toggleTodo : (id : number) => void,
    // deleteTodo : (id: number) => void
}

export interface ItemState {

}

export default class Item extends React.Component<ItemProps, ItemState> {

    constructor(props: ItemProps) {
        super(props)
    }

    // handleClickToggle = (e : React.MouseEvent<HTMLSpanElement>) : void => {
    //     if (e.currentTarget.dataset.id) {
    //         this.props.toggleTodo(parseInt(e.currentTarget.dataset.id))
    //     }
    // }
    
    // handleClickDelete = (e: React.MouseEvent<HTMLSpanElement>) : void=> {
    //     e.stopPropagation()
    //     this.props.deleteTodo(this.props.todo.id)
    // }

    render() {
        return(
            <li 
                // onClick={this.handleClickToggle}
                className={this.props.todo.completed ?'completed': ''}
                data-id={this.props.todo.id}
            >
                {this.props.todo.title}
                <span 
                // onClick={this.handleClickDelete}
                >
                    <i className="material-icons">close</i>
                </span>
            </li>
        )
    }
}
