import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator it will give you two values TRUE/FALSE

const ShortCircuit = () => {
  const [text, setText] = useState('I am true')
  const [isError, setError] = useState(false)

  return <>
    <h1>{text || 'Just me (empty useState)'}</h1>
    <button className="btn" onClick={() => setError(!isError)}>Toggle Error</button>

    {isError && <h1>Error...</h1>}
    {/* if isError is True then display h1 */}

    {isError ? <p>Error</p> : <div><h2>No Error From queston mark</h2></div>}

  </>;
};

export default ShortCircuit;
