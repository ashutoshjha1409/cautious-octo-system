import React, { useContext } from "react";
import { UserContext, CountryContext } from "../../MainComponent";

const ComponentF = (props) => {
  const user = useContext(UserContext);
  const country = useContext(CountryContext);
  return `${user} - ${country}`;
};

export default ComponentF;
