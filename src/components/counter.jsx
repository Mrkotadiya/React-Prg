import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags:['tag1','tag2','tag3']
  };
  style={
      fontWight:"bold",
      fontSize:30

  }
  render() {
    return (
      <div>
        <span  className={this.getBageClasses()}>{this.formateData()}</span>

        <button className="btn btn-secondary btn-m">Increment </button>
        <ul>
            {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }
    getBageClasses() {
        let classes = "btn m-2 btn-";
        classes += (this.state.count) === 0 ? "warning" : "primary";
        return classes;
    }

  formateData() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
