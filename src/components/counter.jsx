import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  style={
      fontWight:"bold",
      fontSize:30

  }
  render() {
    return (
      <div>
        <span style={this.style} className="btn btn-primary m-2">{this.formateData()}</span>

        <button className="btn btn-secondary btn-m">Increment </button>
      </div>
    );
  }
  formateData() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
