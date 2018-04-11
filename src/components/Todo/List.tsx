import * as React from 'react';
import {iTodo} from '../../interfaces'
import ItemTodo from './Item'

export interface ListProps {
    todos : iTodo[],
    toggleTodo : (id : number) => void,
    deleteTodo : (id : number) => void
}

export default class List extends React.Component < ListProps, {} > {

    constructor(props : ListProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    {this
                        .props
                        .todos
                        .map(todo => <ItemTodo
                            toggleTodo={this.props.toggleTodo}
                            deleteTodo={this.props.deleteTodo}
                            key={'item-' + todo.id}
                            todo={todo}/>)}
                </ul>
            </div>
        )
    }
}
