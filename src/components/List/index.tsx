import * as React from 'react';

export interface ListProps { list: Array<string>, onChange: Function}


export class List extends React.Component<ListProps, {}> {

    constructor(props: ListProps) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.list.map((todo) => {
                            return <li key={todo}>{todo}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}