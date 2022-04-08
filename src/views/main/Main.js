import React, { Component } from "react";
import FormInputView from "../components/FormInputView";

class Main extends Component {
  state = {
    name: "",
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleClick = () => {
    alert("Click me");
  };
  render() {
    return (
      <>
        <div className="first">
          Main example
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChange(event)}
          />
        </div>
        <div className="second">Input text: {this.state.name}</div>
        <div className="third">
          <button onClick={this.handleClick}>click me!!!</button>
        </div>
        <FormInputView />
      </>
    );
  }
}

export default Main;
