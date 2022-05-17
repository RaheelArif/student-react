import React, { useState } from "react";

function Numbers() {
  const [a, setA] = useState(6);
  const [b, setB] = useState(3);

  const addA = () => {
    setA(a + 1);
  };

  const subtractB = () => {
    setB(b - 1);
  };

  const addB = () => {
    setB(b + 1);
  };

  const subtractA = () => {
    setA(a - 1);
  };
  return (
    <div className="inc-dec-c">
  
      <h1 className="red ">multiplication of 2 numbers = {a * b} </h1>
      <h1> value of a = {a} </h1>
      <h1> value of b = {b} </h1>
      <p
        style={{
          color: "blue",
        }}
      >
        second paragraph asdsad
      </p>
      <button onClick={addA}>a++</button>
      <button onClick={subtractB}>b--</button>
      <button onClick={addB}>b++</button>
      <button onClick={subtractA}>a--</button>
    </div>
  );
}

export default Numbers;
