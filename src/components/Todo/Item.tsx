import * as React from 'react'
import {iTodo} from '../../interfaces'

export interface ItemProps {
    todo : iTodo,
    toggleTodo : (pos : number) => void
}

export interface ItemState {

}

export default class Item extends React.Component<ItemProps, ItemState> {

    constructor(props: ItemProps) {
        super(props)
    }

    handleClickLi = (e : React.MouseEvent<HTMLLIElement>) => {
        if (e.currentTarget.dataset.id) {
            this.props.toggleTodo(parseInt(e.currentTarget.dataset.id))
        }
    }

    render() {
        return <li 
            className={this.props.todo.completed ?'completed': ''}
            key={this.props.todo.title}
            onClick={this.handleClickLi}
            data-id={this.props.todo.id}>{this.props.todo.title}<span><i className="fa fa-close"></i></span></li>
    }
}