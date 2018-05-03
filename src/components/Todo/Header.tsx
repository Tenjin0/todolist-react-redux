import * as React from "react";
import { connect } from "react-redux";
import { eFilter } from "../../constants/enum";
import { Dispatch, bindActionCreators } from "redux";
import { ITodo, IStoreState } from "../../constants/interfaces";
import { ClearAll, completeAll, clearCompleted } from "../../TodoActions";

export interface IHeaderProps {
    clearCompleted: () => void;
    clearAll: () => void;
    completeAll: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        clearAll: () => dispatch(ClearAll()),
        completeAll: () => dispatch(completeAll()),
        clearCompleted: () => dispatch(clearCompleted())
    };
};

function mapStateToProps(state: IStoreState) {
    return {
    };
}

class Header extends React.Component<IHeaderProps, {}> {

    constructor(props: IHeaderProps) {
        super(props);
    }

    handleCompleteAll = (e: React.MouseEvent<HTMLLIElement>): void => {
        this.props.completeAll();
    }

    handleClearAll = (e: React.MouseEvent<HTMLLIElement>): void => {
        this.props.clearAll();
    }

    handleClearCompleted = (e: React.MouseEvent<HTMLLIElement>): void => {
        this.props.clearCompleted();
    }

    render() {
        return (
            <div>
                <ul className="inline">
                    <li onClick={this.handleCompleteAll}>Complete all</li>
                    <li onClick={this.handleClearAll}>Clear all</li>
                    <li onClick={this.handleClearCompleted}>Clear completed</li>
                </ul>
            </div>
        );
    }
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Header);
