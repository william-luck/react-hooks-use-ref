import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();

  // Accessing information about a DOM element. What do I do with this information? 

  function handleMeasureClick() {
    const div = elementRef.current; 
    console.log('Measurements: ', div.getBoundingClientRect())
  }

  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClick={handleMeasureClick}>Measure</button>
    </div>
  );
}

export default Box;
