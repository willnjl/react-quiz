import React, { Component } from "react";

export default class CountBy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { step } = this.props;
    this.setState({
      count: this.state.count + +step,
    });
  }
  render() {
    const style = { background: "#DDD", border: "10px dotted green" };
    return (
      <div style={style} onClick={this.handleClick}>
        <h3>Count Step</h3>
        <p className={"lead"}>{this.state.count}</p>
      </div>
    );
  }
}

CountBy.defaultProps = {
  count: 5,
};
