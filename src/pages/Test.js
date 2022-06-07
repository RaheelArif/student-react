import React, { useState } from "react";
import logo from "../images/logo512.png";

export default function Test() {
  const [number, setNumber] = useState(3);

  const change = () => {
 
    setNumber(2);
  };

  return (
    <div>
      <h1 onClick={change}>image testing</h1>
      <img className="logo-img" src={logo} alt="" />
      {number === 2 ? <div>equal</div> : <h1>not equal</h1>}
    </div>
  );
}
