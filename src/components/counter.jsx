import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handalIncrement=()=> {
    this.setState({count : this.state.value + 1 })
  }

  render() {
    return (
      <div>
        <span className={this.getBageClasses()}>{this.formateData()}</span>
        <button
          onClick={()=> this.handalIncrement}
          className="btn btn-secondary btn-m"
        >
          Increment
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger m-2">Delete</button>
      </div>
    );
  }
  getBageClasses() {
    let classes = "btn m-2 btn-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formateData() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
