import React from "react";
import Form from "./Form";
class Comp1 extends React.Component {
  render() {
    return (
      <div>
        <First />
        <Second />
      </div>
    );
  }
}
class First extends React.Component {
  render() {
    return (
      <div>
        <h1>javascript</h1>
      </div>
    );
  }
}
class Second extends React.Component {
  state = {
    fname: "",
    lname: "",
    mobile: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value,
     
    });
    event.preventDefault()
  };
  handleClick = (event) => {
    console.log("inputs", this.state);
    event.preventDefault()
  };
  render() {
    return (
      <div>
        <Form
          fname="fname"
          lname="lname"
          mobile="mobile"
          handleClick={this.handleClick}
          onChange={this.handleChange}
          placeholder="fname"
          placeholder1="lname"
          placeholder2="mobile"
        />
      </div>
    );
  }
}
export default Comp1;
