import * as React from "react";
import { eFilter } from "../../constants/enum";

export default class Filter extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  handleClick = (e: React.MouseEvent<HTMLLIElement>): void => {
    const filterOption = e.currentTarget.dataset.key as any;
    // tslint:disable-next-line:no-console
    console.log(filterOption, "selected");
    // @ts-ignore
    // this.props.filterCallback(eFilter[filterOption])
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
