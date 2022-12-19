import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    console.log(count);
    return () => {
      clearInterval(interval);
    };
  });

  return <h2>{count}</h2>;
};

export default UseEffectBasics;
