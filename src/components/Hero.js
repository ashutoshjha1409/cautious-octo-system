import React, { PureComponent } from "react";

class Hero extends PureComponent {
  componentDidMount() {
    if (this.props.heroName === "Joker") {
      throw new Error(" Not a hero!");
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.heroName}</h1>
      </div>
    );
  }
}

export default Hero;
