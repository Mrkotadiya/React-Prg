import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    React.createElement("h1");
    return (
      <div>
        <span>{this.formateData()}</span>
        <button>Increment </button>
      </div>
    );
  }
  formateData(){
      const {count} = this.state;
      return count === 0 ? 'Zero' : count
  }
}

export default Counter;
