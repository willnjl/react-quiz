import React, { Component } from "react";

export default class MinimumLength extends Component {
  constructor(props) {
    super(props);

    this.state = {
      length: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const inputLength = e.currentTarget.value.length;
    this.setState({
      length: inputLength,
    });
  }
  render() {
    const { length } = this.state;
    const { min } = this.props;
    return (
      <form className="form-group">
        <h3>MinimumLength</h3>
        <input
          type="password"
          class="form-control"
          onChange={(e) => this.handleChange(e)}
        />
        <div
          className={"alert alert-" + (length >= min ? "success" : "warning")}
        >
          <p class="lead">{length >= min ? "nice" : "Too short!"}</p>
          <p>
            {length}/{min}
          </p>
        </div>
      </form>
    );
  }
}

MinimumLength.defaultProps = {
  min: 30,
};
