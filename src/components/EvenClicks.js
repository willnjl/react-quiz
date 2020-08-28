import React, { Component } from "react";

export default class EvenClicks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    const { count } = this.state;
    return (
      <div class={"alert alert-" + (count % 2 === 0 ? "danger " : "success ")}>
        <h1>{count}</h1> <h2>{count % 2 === 0 ? "Even " : "Odd "}</h2>
        <button
          className="btn btn-primary"
          onClick={(e) => this.handleClick(e)}
        >
          +1
        </button>
      </div>
    );
  }
}
