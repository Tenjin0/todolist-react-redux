import * as React from "react";
import { eFilter } from "../../constants/enum";
import { Dispatch, bindActionCreators } from "redux";
import { ITodo, IStoreState } from "../../constants/interfaces";
import { changeFilter } from "../../TodoActions";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeFilter: (filter: eFilter) => dispatch(changeFilter(filter))
  };
};

function mapStateToProps(state: IStoreState) {
  return {};
}

export interface IFilterProps {
  changeFilter: (filter: eFilter) => void;
}
class Filter extends React.Component<IFilterProps, {}> {
    constructor(props: IFilterProps) {
        super(props);
    }

    handleClick = (e: React.MouseEvent<HTMLLIElement>): void => {
        const filterOption = e.currentTarget.dataset.key as any;
        console.log(filterOption, "selected");
        // @ts-ignore
        this.props.changeFilter(eFilter[filterOption]);
    }

    render() {
        const filterkeys = Object.keys(eFilter).filter((option) => {
            // @ts-ignore
            // tslint:disable-next-line:radix
            return Number.isNaN(parseInt(option));
        });
        return (
            <ul className="inline">
                {filterkeys.map((key, index) => {
                    return (
                        <li
                            onClick={this.handleClick}
                            data-key={key}
                            key={key + "-" + index}
                        >
                            {key}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

// @ts-ignore
export default connect(null, mapDispatchToProps)(Filter);
