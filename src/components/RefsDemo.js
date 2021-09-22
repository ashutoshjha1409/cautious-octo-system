import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    // 1. create ref
    // 2. tag to the element for reference
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  handleClick = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button type="btn" onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}

export default RefsDemo;
