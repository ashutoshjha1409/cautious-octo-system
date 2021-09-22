import React from "react";
// import ComponentF from "./ComponentF";
import { UserContext, CountryContext } from "../../MainComponent";

const ComponentE = (props) => {
  return (
    <UserContext.Consumer>
      {(user) => (
        <CountryContext.Consumer>
          {(country) => {
            return `${user} -> ${country}`;
          }}
        </CountryContext.Consumer>
      )}
    </UserContext.Consumer>
  );
};

export default ComponentE;
