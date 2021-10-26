import React from 'react';
import { data } from '../../../data';

// eather import or React.useState([])

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return <>
    {
      people.map((person) => {
        const { id, name } = person
        // console.log(person)
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>X</button>
          </div>
        )
      })
    }
    <button className="btn" onClick={() => setPeople([])}>Clear</button>
  </>;
};

export default UseStateArray;
