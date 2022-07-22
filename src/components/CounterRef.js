import React, { useRef } from "react";

function CounterRef() {
  const count = useRef(0);
  // Creates a ref variable,, with an object with just one key: current: 0
  // Does not cause the component to rerender. 

  function handleClick() {
    count.current = count.current + 1;
    console.log(count.current);
  }

  return (
    <div>
      <h1>CounterRef</h1>
      <button onClick={handleClick}>{count.current}</button>
    </div>
  );
}

export default CounterRef;
