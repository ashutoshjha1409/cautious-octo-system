import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  // life cycle methods
  componentDidMount() {
    console.log("Hello world");
  }

  shouldComponentUpdate(nextProps, prevProps) {}

  componentDidUpdate() {
    console.log("Hello world again");
  }

  // user defined methods
  // user defined
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    // React Fragments
    return (
      <>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>{`My name is : ${this.state.username}`}</div>
      </>
    );
  }
}

export default Welcome;
