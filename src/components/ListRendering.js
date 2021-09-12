import React, { Component } from "react";
import Person from "./Person";

// const names = ["Bruce", "Clark", "Diana"];
const persons = [
  {
    id: 1,
    name: "Bruce",
    age: 30,
    skill: "React",
  },
  {
    id: 2,
    name: "Clark",
    age: 25,
    skill: "Angular",
  },
  {
    id: 3,
    name: "Diana",
    age: 28,
    skill: "Vue",
  },
];

class ListRendering extends Component {
  render() {
    return (
      <div>
        <h1>List Rendering</h1>
        {persons.map((person) => (
          <Person person={person} />
        ))}
      </div>
    );
  }
}

export default ListRendering;
