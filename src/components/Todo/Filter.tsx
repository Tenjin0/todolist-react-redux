import * as React from 'react'
import {eFilter} from '../../enum'

export interface FilterProps {
    filterCallback :  (filter: eFilter) => void
}
export interface FilterState {}

export default class Filter extends React.Component<FilterProps, FilterState> {
    
    constructor(props: FilterProps) {
        super(props)
    }

    handleClick = (e: React.MouseEvent<HTMLLIElement>) : void => {
        const all = "all" as any
        const filterOption = e.currentTarget.dataset.key as any
        // @ts-ignore
        this.props.filterCallback(eFilter[filterOption])
    }

    render() {
        const filterkeys = Object.keys(eFilter).filter(option => {
            // @ts-ignore
            return Number.isNaN(parseInt(option))
        })
        return <ul className="inline">
            {
                filterkeys.map((key, index) => {
                    return <li onClick={this.handleClick} data-key={key} key={key + '-' + index}>{key}</li>
                })
            }
        </ul>
    }
}
