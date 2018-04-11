import * as React from 'react'

export interface HeaderProps {
    clearCompleted: () => void,
    clearAll: () => void,
    completeAll: () => void
}

export interface HeaderState {}

export default class Header extends React.Component < HeaderProps,
HeaderState > {

    constructor(props : HeaderProps) {
        super(props)
    }

    handleCompleteAll = (e : React.MouseEvent < HTMLLIElement >) : void => {
        this.props.completeAll()
    }
    handleClearAll = (e : React.MouseEvent < HTMLLIElement >) : void => {
        this.props.clearAll()
    }
    handleClearCompleted = (e : React.MouseEvent < HTMLLIElement >) : void => {
        this.props.clearCompleted()
    }

    render() {
        return <div>
            <ul className="inline">
                <li onClick={this.handleCompleteAll}>Complete all</li>
                <li onClick={this.handleClearAll}>Clear all</li>
                <li onClick={this.handleClearCompleted}>Clear completed</li>
            </ul>
        </div>
    }
}