import React, { Component } from "react";
import withTooltip from "../hoc/withTooltip";

class Counter extends Component {
  state = { count: 0 };
  increment = () => {
    let count = this.state.count + 1;
    this.setState({ count });
  };
  render() {
    return (
      <React.Fragment>
        <div>Count: {this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
        {this.props.showTooltip && <div> Click to increment</div>}
      </React.Fragment>
    );
  }
}

export default withTooltip(Counter);
