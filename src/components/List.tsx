import * as React from 'react';
import {iTodo} from '../interfaces'

export interface ListProps { todos: iTodo[]}

export default class List extends React.Component<ListProps, {}> {

    constructor(props: ListProps) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.todos.map((todo) => {
                            return <li key={todo.title}>{todo.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
