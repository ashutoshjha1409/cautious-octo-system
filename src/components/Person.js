import React, { Component } from "react";

class Person extends Component {
  render() {
    const { name, age, skill } = this.props.person;
    return (
      <div>
        <h1>{`My name is ${name}. My age is ${age}. I know ${skill}`}</h1>
      </div>
    );
  }
}

export default Person;
