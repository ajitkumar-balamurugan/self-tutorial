import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => {
            setValue(value - 1);
            console.log(value);
          }}
        >
          Decrease{" "}
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(0);
            console.log(value);
          }}
        >
          Reset{" "}
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
            console.log(value);
          }}
        >
          Increase{" "}
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => {
            setTimeout(() => {
              setValue((prevVal) => prevVal + 1);
              console.log(value);
            }, 2000);
          }}
        >
          Delayed Increase{" "}
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
