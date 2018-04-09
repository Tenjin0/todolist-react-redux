import * as React from 'react';
import {iTodo} from '../interfaces'

export interface ListProps { todos: iTodo[], toggleTodo: (pos : number) => void}

export default class List extends React.Component<ListProps, {}> {

    constructor(props: ListProps) {
        super(props);
    }

    handleClick = (e : React.MouseEvent<HTMLLIElement>) => {
        if (e.currentTarget.dataset.id) {
            this.props.toggleTodo(parseInt(e.currentTarget.dataset.id))
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.todos.map((todo, index) => {
                            return <li className={todo.completed ?'completed': ''} key={todo.title} onClick={this.handleClick} data-id={index}>{todo.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
