import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  constructor(){
    super();
    this.handalIncrement = this.handalIncrement.bind(this)
  }

  handalIncrement() {
    console.log("increment Clicked!", this);
  }
  render() {
    return (
      <div>
        <span className={this.getBageClasses()}>{this.formateData()}</span>

        <button
          onClick={this.handalIncrement}
          className="btn btn-secondary btn-m"
        >
          Increment{" "}
        </button>
      </div>
    );
  }
  getBageClasses() {
    let classes = "btn m-2 btn-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formateData() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
