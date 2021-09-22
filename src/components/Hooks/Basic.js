import React, { useState, useEffect } from "react";

const Basic = () => {
  const [state, setState] = useState({
    text: "I have notbeen clicked",
    loading: true,
  });

  //   const [text, setText] = useState('dgfhgd');
  //   const [loading, setLoading] = useState(false)

  const { text, loading } = state;

  useEffect(() => {
    console.log("Hello");
  }, [text]);

  return (
    <div>
      <h1>{loading ? text : ""}</h1>
      <button
        onClick={() => {
          setState({ text: "I have been clicked" });
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Basic;
