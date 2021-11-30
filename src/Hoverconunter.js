import React, { Component } from "react";

class HoverCounter extends Component {
   
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    increment = () => {
      this.setState({ count: this.state.count + 1 })
    }
    decrement= ()=> {
        this.setState({count:this.state.count-1})
      }
    render() {
      return (
        <div className="HoverCounter">
         <button onClick={this.increment} className="counter">+</button>
         <button onClick={this.decrement} className="counter">-</button>
         <h2 style="color:red">{this.state.count}</h2>
        </div>
      );
    }
  }

export default HoverCounter;
