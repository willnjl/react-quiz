import React, { Component } from "react";

export default class Multiplier extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const target = e.currentTarget;
    if (target.name === "x") {
      this.setState({
        x: +target.value,
      });
    } else {
      this.setState({
        y: +target.value,
      });
    }
  }
  render() {
    const { x, y } = this.state;
    return (
      <div className={"form-group"}>
        <input
          type="text"
          className="form-control"
          name="x"
          onChange={(e) => this.handleChange(e)}
        />
        <p> X </p>
        <input
          type="text"
          className="form-control"
          name="y"
          onChange={(e) => this.handleChange(e)}
        />
        <p> = </p>
        <p className="lead"> {x * y} </p>
      </div>
    );
  }
}
