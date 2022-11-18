import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handalDelete(){
      console.log("eventent Delete Call!");
  }

  render() {
    return (
      <div>
          {this.props.id}
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} onDelete={this.handalDelete} value={counter.value} id={counter.id}>
             
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
