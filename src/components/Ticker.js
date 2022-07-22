import React, { useEffect, useState, useRef } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
  // sets initial vale of old price to compare 
  const prevPriceRef = useRef(price)

  useEffect(() => {
    // creates a new price every one second. 
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  // Everytime the ticker re-renders, it will compare the current price with the old price, and set the color of the text based on this. 
  useEffect(() => {

    const prevPrice = prevPriceRef.current // Remember, object created with just one key. 

    if (price > prevPrice) {
      setColor('green')
    } else if (price < prevPrice) {
      setColor('red')
    } else {
      setColor('black')
    }

    // set the reference value to new price. 
    prevPriceRef.current = price;
  }, [price])

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
