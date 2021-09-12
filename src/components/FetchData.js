import React from "react";

class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: "",
      name: "",
    };
  }

  componentDidMount() {
    this.makeApiCall("MZubair005");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  makeApiCall(name) {
    fetch(`https://api.github.com/users/${name}`)
      .then((response) => {
        if (response.status !== 200) throw response;
        return response.json();
      })
      .then((data) => {
        const { name, login, avatar_url } = data;
        let userName = name ? name : login;
        this.setState({ name: userName, avatar_url });
        console.log("data", data);
      })
      .catch((error) => {
        alert("User not found.");
      });
  }

  render() {
    const { name, avatar_url } = this.state;
    return (
      <>
        <h1>{name}</h1>
        <img src={avatar_url} width="300" height="300" alt="user profile" />
      </>
    );
  }
}

export default FetchData;
