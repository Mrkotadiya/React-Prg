import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };

  handalIncrement=()=> {
    // console.log(product);
    this.setState({count : this.state.count + 1 })
  }

  render() {
    console.log("props",this.props);
    return (
      <div>
        <span className={this.getBageClasses()}>{this.formateData()}</span>

        <button
          onClick={()=> this.handalIncrement()}
          className="btn btn-secondary btn-m"
        >
          Increment
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
