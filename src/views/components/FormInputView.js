import React, { Component } from "react";

class FormInputView extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleOnChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleOnChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault(); // ko render lai - can tim hieu them
    console.log("=====>>>>>event ", this.state);
  };

  render() {
    console.log("=====>>>>> ");
    return (
      <>
        <div className="first">Form input</div>
        <form>
          <label htmlFor="fname">First name</label>
          <br />
          <input
            value={this.state.firstName}
            type="text"
            onChange={(event) => this.handleOnChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name</label>
          <br />
          <input
            value={this.state.lastName}
            type="text"
            onChange={(event) => this.handleOnChangeLastName(event)}
          />
          <br />
          <input type="submit" onClick={(event) => this.handleClick(event)} />
        </form>
      </>
    );
  }
}

export default FormInputView;
