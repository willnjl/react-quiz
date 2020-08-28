import React, { Component } from "react";

export default class HideMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      hidden: true,
    });
  }
  render() {
    return (
      <div
        class="jumbotron"
        style={{ display: this.state.hidden ? "none" : "block" }}
        onClick={this.handleClick}
      >
        {this.props.children}
      </div>
    );
  }
}
