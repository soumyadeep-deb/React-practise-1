import React, { useState } from "react";
import "./Calc.css";

const Calc = () => {
  const [message, changeMessage] = useState(0);

  const incrementMsg = () => {
    changeMessage(message + 1);
    console.log("Increment clicked",message);
  };

  const decrementMsg = () => {
    changeMessage(message - 1);
    console.log("Decrement clicked",message);
  };

  function resetMsg(){
    changeMessage(0);
    console.log("Reset clicked",message);
  }

  return (
    <div>
      <div className="content">{message}</div>
      <div className="buttons" onClick={incrementMsg}>+</div>
      <div className="buttons" onClick={decrementMsg}>-</div>
      <div className="buttons" onClick={resetMsg}>Reset</div>
    </div>
  );
};

export default Calc;