import React, { Component } from "react";

export default class MultiplierProps extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { x, y } = this.props;
    return <p>{x * y}</p>;
  }
}
