import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0)



  useEffect(() => {
    console.log("Call userEffect");
    if (value >= 1) {
      document.title = `New Messages(${value})`
    }
  }, [value]);
  // second parameter
  // Array of dependecies - list of dependecies  [] - it will run Only once on initial render (empty [])

  useEffect(() => {
    console.log("You will see me Only once!");

  }, []);

  console.log("render component");
  return <>
    <h1>{value}</h1>
    <button className="btn" onClick={() => setValue(value + 1)}>Plus</button>
  </>
};

export default UseEffectBasics;
// Works after every render
