import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "increment5":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrement5":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>First Counter = {count.firstCount}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset", value: 0 })}>
        Reset
      </button>

      <div>Second counter = {count.secondCount}</div>
      <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
        Decrement by 5
      </button>
    </div>
  );
}

export default CounterTwo;
