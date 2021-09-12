import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComponent from "./PureComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ashu",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "ashu" });
    }, 2000);
  }

  render() {
    console.log("****parent component****");
    return (
      <div>
        <h1>parent component</h1>
        <RegComp />
        <PureComponent />
      </div>
    );
  }
}

export default ParentComp;
