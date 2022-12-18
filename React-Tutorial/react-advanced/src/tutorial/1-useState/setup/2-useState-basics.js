import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Hello World");
  const handler = () => {
    console.log([text, setText]);
    // text = "Hello People";
    // console.log(text);
    if (text === "Hello World") {
      setText("Hello People");
    } else {
      setText("Hello World");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handler}>
        Click
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
