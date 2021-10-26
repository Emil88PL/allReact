import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: "24",
    message: "random message",
  });
  console.log(person);

  const [name, setName] = useState('petet')
  const [age, setAge] = useState(24)
  const [message, setMessge] = useState('new message')

  const changeMessage = () => {
    // setPerson({ ...person, message: 'i dont get it... or maybe i do.' })
    setMessge('defently not...')
  }


  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className="btn" onClick={changeMessage}>change message</button>
  </>;
};

export default UseStateObject;
